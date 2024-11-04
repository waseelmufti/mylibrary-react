import { Link } from 'react-router-dom';
function Sidebar() {
  const menuItems = [
    {
      "menuLable": "Main Menu",
      "menuList": [
        {
          "type": "link",
          "to": "/dashboard",
          "label": "Home",
          "icon": "mdi mdi-home"
        },
        {
          type: "dropdown",
          label: "Authors",
          icon: "mdi mdi-shield-account",
          items: [
            {
              type: "link",
              to: "/authors",
              label: "All Authors"
            },
            {
              type: "link",
              to: "/authors/create",
              label: "Add Author"
            }]
        },
        {
          type: "dropdown",
          label: "Books",
          icon: "mdi mdi-book",
          items: [
            {
              type: "link",
              to: "/books",
              label: "All Books"
            },
            {
              type: "link",
              to: "/books/create",
              label: "Add Book"
            }]
        },
      ]
    }
  ];

  function dropdownToggle(e: any){
    var dropdownIcon = e.currentTarget.getElementsByClassName('dropdown-icon')[0].getElementsByClassName('mdi')[0];
      e.currentTarget.parentNode.classList.toggle('is-active');
      dropdownIcon.classList.toggle('mdi-plus');
      dropdownIcon.classList.toggle('mdi-minus');
  }

  function getLinkItem(item: any, key: number){
    return (<li key={`menu-item-${key}`}>
      <Link to={item.to} className="router-link-active has-icon">
          <span className="icon"><i className={item.icon}></i></span>
          <span className="menu-item-label">{item.label}</span>
      </Link>
  </li>);
  }
  function getSubmenu(item: any, key: number){
    const subitems = item.items.map((subItem: any, idx: number) => {
      return (<li key={`sub-item-${idx}`}>
        <Link to={subItem.to}>
            <span>{subItem.label}</span>
        </Link>
    </li>);
    });
    return (<li key={`dropdown-item-${key}`}>
        <a className="has-icon has-dropdown-icon" onClick={dropdownToggle}>
            <span className="icon"><i className={item.icon}></i></span>
            <span className="menu-item-label">{item.label}</span>
            <div className="dropdown-icon">
                <span className="icon"><i className="mdi mdi-plus"></i></span>
            </div>
        </a>
        <ul>{subitems}</ul>
    </li>);
  }
  const menu = menuItems.map((menu: any, index: number) => {
    const menuLable = (<li key={`menu-lable-${index}`}><p className="menu-label">{menu.menuLable}</p></li>);
    const menuList = menu.menuList.map((menuItem: any, idx: number) => {
      let item = null;
      if (menuItem.type === "dropdown"){
        item = getSubmenu(menuItem, idx);
      }else{
        item = getLinkItem(menuItem, idx);
      }
      return item;
    });
    return [menuLable, menuList];

  });
    return (
        <>
            <aside className="aside is-placed-left is-expanded">
                <div className="aside-tools">
                    <div className="aside-tools-label">
                        <span>My <b>Library</b></span>
                    </div>
                </div>
                <div className="menu is-menu-main">
                    <ul className="menu-list">
                  {menu}
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
