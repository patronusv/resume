import styled from 'styled-components';
const SidebarStyled = styled.div`
  /* background: #1e2939; */
  width: 370px;
  margin-left: auto;
  padding-top: 20px;
  padding-bottom: 40px;
  background: #2d9ec8;

  .sidebar-container {
    margin-top: 55px;
    margin-left: 40px;
    margin-right: 40px;
  }

  .sidebar-title {
    /* color: #ffffff; */
    color: #1e2939;
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 20px;
  }

  .contacts-link {
    display: flex;
    align-items: top;
    /* color: #7f858f; */
    color: #1e2939;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .contacts-link:hover,
  .contacts-link:focus {
    /* color: #ffffff; */
    color: #ff6b08;
  }
  .contacts-link-type {
    display: flex;
    align-items: center;
    /* color: #ffffff; */
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    margin-right: 10px;
  }

  .sidebar-list-item {
    /* color: #ff6b08; */

    color: #1e2939;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    margin-left: 15px;
  }

  .sidebar-list-text {
    /* color: #e9eaec; */
    color: #1e2939;
  }
`;
export default SidebarStyled;
