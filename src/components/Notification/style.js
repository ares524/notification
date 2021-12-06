import styled from "@emotion/styled";

export const StyledNotificationLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;

  .notification-container {
    display: flex;
    flex-direction: row;
    width: 29.3rem;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
      0px 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;

    @media (max-width: 576px) {
      width: 100%;
      margin: 0 1rem;
    }

    .notification-icon-container {
      background-color: #3182ce;
      padding: 2rem 1rem;
    }

    .notification-content {
      flex: 1;
      padding: 1rem;
      border-right: 1px solid #e2e8f0;
    }

    .notification-button-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #ffffff;

      .notification-btn {
        padding: 1rem;
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.063rem;
        text-align: center;
        cursor: pointer;
      }

      .update-btn {
        color: #3182ce;
        border-bottom: 1px solid #e2e8f0;
      }

      .close-btn {
        color: #1a202c;
      }
    }
  }
`;
