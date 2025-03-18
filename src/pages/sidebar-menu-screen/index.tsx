import { useNavigate } from "react-router-dom";
import { CommonScreen, SidebarMenu } from "../../components";

export function SidebarMenuScreen() {
  const navigate = useNavigate();

  return (
    <CommonScreen
      title="Side Menu"
      goBack={() => {
        navigate(-1);
      }}
    >
      here, when you hover one item, you can se a red border, its a safe border
      where the mouse can go without closing de submenu:
      <SidebarMenu showBackground />
    </CommonScreen>
  );
}
