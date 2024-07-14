import { Avatar, Button, Card, Flex, Typography } from "antd";
import { IUser } from "../../../types/entities/user";
import { getNameLetters } from "../../../utils/heplers";
import "./profileCard.css";
import { useState } from "react";

const { Text, Title } = Typography;
const ProfileCard = ({ profile }: { profile: Partial<IUser> }) => {
  const [showCard, setShowCard] = useState(false);
  const onClickAvatar = () => {
    setShowCard(!showCard);
  };
  return (
    <div style={{ position: "relative" }}>
      <Avatar
        onClick={onClickAvatar}
        size={40}
        style={{
          marginRight: "1rem",
          cursor: "pointer",
          backgroundColor: "lightblue",
        }}
      >
        {getNameLetters(profile?.contact_name || "")}
      </Avatar>
      <Card
        style={{ opacity: showCard ? 1 : 0 }}
        hoverable
        className="profile_card"
      >
        <Flex vertical gap={8}>
          <div>
            <Title style={{ margin: 0 }} level={5}>
              {profile?.contact_name}
            </Title>
            <Text>{profile?.primary_email}</Text>
          </div>
          <Button type="primary">View Profile</Button>
          <Button>Log Out</Button>
        </Flex>
      </Card>
    </div>
  );
};

export default ProfileCard;
