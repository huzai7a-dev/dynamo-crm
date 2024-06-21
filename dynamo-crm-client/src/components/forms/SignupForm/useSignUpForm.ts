import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import { httpSignup } from "../../../services/auth.service";
import { showNotification } from "../../../utils/heplers";
import { APP_ROUTES } from "../../../constants";
import { SignUpResponse } from "../../../types/httpResponse/auth";

type SignUpFormData = z.infer<typeof signUpValidationSchema>;
const signUpValidationSchema = z.object({
  user_name: z.string().min(6, "User name is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  primary_email: z.string().email("Invalid email address"),
  secondary_email: z.string().email("Invalid email address"),
  invoice_email: z.string().email("Invalid email address"),
  contact_name: z.string().min(1, "Contact name is required"),
  phone: z.string().min(1, "Phone number is required"),
  cell: z.string().optional(),
  zip_code: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  reference: z
    .enum(["Search Engine", "Sales Manager", "Customer Reference", "Others"])
    .optional(),
  address: z.string().optional(),
  website: z.string().url().optional(),
  state: z.string().optional(),
});

const useSignUpForm = () => {
  const navigate = useNavigate();

  const { mutate: signUpUser } = useMutation<
    SignUpResponse,
    AxiosError<{ message: string }>,
    SignUpFormData
  >({
    mutationFn: (data) => httpSignup(data),
    onError: (res: AxiosError<{ message: string }>) => {
      const errorMessage = res.response?.data.message || "Something went wrong";
      showNotification("error", errorMessage);
    },
    onSuccess() {
      showNotification("success", "Sign up successful");
      navigate(APP_ROUTES.login);
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpValidationSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    signUpUser(data);
  };

  return { onSubmit, handleSubmit, control, errors };
};

export default useSignUpForm;
