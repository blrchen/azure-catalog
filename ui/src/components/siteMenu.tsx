import { Layout, Menu } from 'antd';
import { CloudOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import SubMenu from "antd/es/menu/SubMenu";

const { Sider } = Layout;
const SideMenu = () => {
  const navigate = useNavigate();
  const menuConfigs = [
    {
      name: "Azure",
      icon: <CloudOutlined />,
      route: "/azure",
      child: [
        {
          name: "Geographies",
          route: "/geographies",
        },
        {
          name: "Regions",
          route: "/regions",
        },
      ],
    },
    {
      name: "AWS",
      icon: <CloudOutlined />,
      route: "/aws",
      child: [
        {
          name: "Geographies",
          route: "/geographies",
        },
        {
          name: "Regions",
          route: "/regions",
        },
      ],
    },
    {
      name: "About",
      icon: <InfoCircleOutlined />,
      route: "/about",
    },
  ];

  const getMenuItems = (list: any, path = "") => {
    return list.map((menu: any) => {
      if (menu.child && menu.child.length) {
        return (
          <SubMenu icon={ menu.icon } key={ path + menu.route } title={ menu.name }>
            { getMenuItems(menu.child, path + menu.route) }
          </SubMenu>
        );
      }
      return (
        <Menu.Item
          key={ path + menu.route }
          icon={ menu.icon }
          onClick={ () => {
            navigate(path + menu.route);
          } }
        >
          { menu.name }
        </Menu.Item>
      );
    });
  };

  return (
    <Sider>
      <div style={ { fontSize: 'medium', color: 'white', margin: '10px', paddingLeft: '15px' } }>
        Cloud Infrastructure
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={ ['/'] }
        defaultOpenKeys={ ['/'] }
      >
        { getMenuItems(menuConfigs) }
      </Menu>
    </Sider>
  );
};

export default SideMenu;
