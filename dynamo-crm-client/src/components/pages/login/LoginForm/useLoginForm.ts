import { z } from "zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";

import { showNotification } from "../../../../utils/heplers";
import { httpLogin } from "../../../../services/auth.service";
import { APP_ROUTES } from "../../../../constants";
import useProfileStore from "../../../../store/authUser";
import { LoginResponse } from "../../../../types/httpResponse/auth";

const signInValidationSchema = z.object({
  user_name: z.string().min(6, "User name is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type LoginFormData = z.infer<typeof signInValidationSchema>;

const useLoginForm = () => {
  const navigate = useNavigate();
  const setProfile = useProfileStore((store) => store.setProfile);

  const { mutate: loginUser } = useMutation<
    LoginResponse,
    AxiosError,
    LoginFormData
  >({
    mutationFn: (data) => httpLogin(data),
    onError: (res: AxiosError) => {
      const errorMessage =
        (res.response?.data as { message: string }).message ||
        "Something went wrong";
      showNotification("error", errorMessage);
    },
    onSuccess(response) {
      localStorage.setItem("token", response.token);
      setProfile(response.profile || {});
      showNotification("success", "Login successful");
      navigate(APP_ROUTES.dashboard);
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(signInValidationSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    loginUser(data);
  };

  return { onSubmit, handleSubmit, control, errors };
};

export default useLoginForm;
