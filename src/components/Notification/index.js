import React from "react";
import { Flex, Heading, Box, Text } from "@chakra-ui/react";

import NotificationInfoIcon from "../Icons/NotificationInfoIcon";
import { StyledNotificationLayout } from "./style";

const Notification = () => {
  return (
    <StyledNotificationLayout>
      <Flex alignItems="center" justifyContent="center">
        <Box className="notification-container">
          <Box className="notification-icon-container">
            <NotificationInfoIcon />
          </Box>
          <Box flex="1" className="notification-content">
            <Heading as="h5" size="sm">
              Update Available!
            </Heading>
            <Text fontSize="sm">
              A new version is available. Please upgrade for the best
              experience.
            </Text>
          </Box>
          <Box className="notification-button-content">
            <Text className="notification-btn update-btn">Update</Text>
            <Text className="notification-btn close-btn">Close</Text>
          </Box>
        </Box>
      </Flex>
    </StyledNotificationLayout>
  );
};

export default Notification;
