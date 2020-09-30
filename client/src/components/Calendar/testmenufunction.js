import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Expresso from '../utils/Expresso';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: null,};

  }
  componentDidMount() {
    if (this.props.match.params.id === 'new') {
      const newMenu = { title: ''      };
      this.setState({menu: newMenu, savedMenu: JSON.parse(JSON.stringify(newMenu))      });
      return;
    }
     //this save the input to the json
    Expresso.getMenu(this.props.match.params.id).then(menu => {
      if (menu) {        this.setState({menu: menu, savedMenu: JSON.parse(JSON.stringify(menu)) }); }
    });
  }


  menuHasChanges() {
    const menu = this.state.menu;
    const savedMenu = this.state.savedMenu;
    if (!savedMenu) {      return false;    }
    if (menu.title === savedMenu.title) { return false;}
    return true;
  }
  menuHasAllRequiredFields() {    return !!this.state.menu.title;  }

  updateMenuTitle(event) {
    const menu = JSON.parse(JSON.stringify(this.state.menu));
    menu.title = event.target.value;
    this.setState({menu: menu});
  }
  updateMenuItemName(event, menuItemIndex) {
    const menuItems = JSON.parse(JSON.stringify(this.state.menuItems));
    menuItems[menuItemIndex].name = event.target.value;
    this.setState({menuItems: menuItems});
  }
  updateMenuItemPrice(event, menuItemIndex) {
    const menuItems = JSON.parse(JSON.stringify(this.state.menuItems));
    menuItems[menuItemIndex].price = event.target.value;
    this.setState({menuItems: menuItems});
  }
  updateMenuItemInventory(event, menuItemIndex) {
    const menuItems = JSON.parse(JSON.stringify(this.state.menuItems));
    menuItems[menuItemIndex].inventory = event.target.value;
    this.setState({menuItems: menuItems});
  }
  updateMenuItemDescription(event, menuItemIndex) {
    const menuItems = JSON.parse(JSON.stringify(this.state.menuItems));
    menuItems[menuItemIndex].description = event.target.value;
    this.setState({menuItems: menuItems});
  }
  saveMenu() {
    if (this.state.menu.id) {
      Expresso.updateMenu(this.state.menu).then(menu => {
        this.setState({menu: menu, savedMenu: JSON.parse(JSON.stringify(menu)) });
      });
    } else {
      Expresso.createMenu(this.state.menu).then(menu => {
        this.props.history.push(`/menus/${menu.id}`);
        this.setState({          menu: menu,          savedMenu: JSON.parse(JSON.stringify(menu)) });
        Expresso.getMenuItems(this.props.match.params.id).then(menuItems => {
          const sortedMenuItems = this.sortMenuItems(menuItems);
          this.setState({
            menuItems: sortedMenuItems,
            savedMenuItems: JSON.parse(JSON.stringify(sortedMenuItems))
          });
        });
      });
    }
  }

  addMenuItem() {
    const newMenuItem = { name: '', description: '', inventory: 0, price: 0, };
    const menuItems = JSON.parse(JSON.stringify(this.state.menuItems));
    menuItems.push(newMenuItem);
    this.setState({menuItems: menuItems});
  }
  saveMenuItem(menuItemIndex) {
    if (this.state.menuItems[menuItemIndex].id) {
      Expresso.updateMenuItem(this.state.menuItems[menuItemIndex], this.state.menu.id)
        .then(menuItem => {
          let menuItems = JSON.parse(JSON.stringify(this.state.menuItems));
          menuItems.splice(menuItemIndex, 1, menuItem);
          let savedMenuItems = JSON.parse(JSON.stringify(this.state.savedMenuItems));
          savedMenuItems.splice(menuItemIndex, 1, menuItem);
          menuItems = this.sortMenuItems(menuItems);
          savedMenuItems = this.sortMenuItems(savedMenuItems);
          this.setState({
            menuItems: menuItems,
            savedMenuItems: JSON.parse(JSON.stringify(menuItems))
          });
        });
    } else {
      Expresso.createMenuItem(this.state.menuItems[menuItemIndex], this.state.menu.id)
        .then(menuItem => {
          let menuItems = JSON.parse(JSON.stringify(this.state.menuItems));
          menuItems.splice(menuItemIndex, 1, menuItem);
          let savedMenuItems = JSON.parse(JSON.stringify(this.state.savedMenuItems));
          savedMenuItems.splice(menuItemIndex, 1, menuItem);
          menuItems = this.sortMenuItems(menuItems);
          savedMenuItems = this.sortMenuItems(savedMenuItems);
          this.setState({menuItems: menuItems, savedMenuItems: savedMenuItems});
      });
    }
  }

  deleteMenuItem(menuItem, menuItemIndex) {
    Expresso.deleteMenuItem(menuItem.id, this.state.menu.id).then(() => {
      const menuItems = JSON.parse(JSON.stringify(this.state.menuItems));
      menuItems.splice(menuItemIndex, 1);
      const savedMenuItems = JSON.parse(JSON.stringify(this.state.savedMenuItems));
      savedMenuItems.splice(menuItemIndex, 1);
      this.setState({menuItems: menuItems, savedMenuItems: savedMenuItems });
    });
  }
  renderMenuButtons() {
    const menu = this.state.menu;
    let saveButton, cancelButton, deleteButton;
    if (this.menuHasChanges() && this.menuHasAllRequiredFields()) {
      saveButton =<a className={'button'} onClick={this.saveMenu}>Save</a>;
    } else {      saveButton = <a className='button inactive'>Save</a>;}
    if (this.menuHasChanges()) {
      cancelButton =<a className={'button'} onClick={this.cancelMenuEdit}>Cancel</a>
    } else {      cancelButton = <a className='button inactive'>Cancel</a>;    }
    if (!this.state.menuItems.length) {
      deleteButton = <a className='button delete' onClick={this.deleteMenu}>Delete</a>;
    } else {      deleteButton = ''; }
    return (<div className="buttons">        {saveButton}{cancelButton}{deleteButton}</div>    )
  }
  renderMenuItemButtons(menuItem, menuItemIndex) {
    let saveButton, cancelButton, deleteButton;
    if (this.menuItemHasChanges(menuItem, menuItemIndex) && this.menuItemHasAllRequiredFields(menuItem)) {
      saveButton =<a className={'button'} onClick={this.saveMenuItem.bind(this, menuItemIndex)}>Save</a>;
    } else { saveButton = <a className='button inactive'>Save</a>;    }
    if (this.menuItemHasChanges(menuItem, menuItemIndex)) {
      cancelButton =<a className={'button'} onClick={this.cancelMenuItemEdit.bind(this, menuItemIndex)}>Cancel</a>
    } else {      cancelButton = <a className='button inactive'>Cancel</a>;}
    deleteButton = <a className='button delete' onClick={this.deleteMenuItem.bind(this, menuItem, menuItemIndex)}>Delete</a>;
    return (      <div className="buttons">        {saveButton}{cancelButton}{deleteButton}</div> )
  }
  renderMenuItems() {
    if (this.props.match.params.id === 'new') {      return '';    }
    const menuItems = this.state.menuItems.map((menuItem, menuItemIndex) => {
      return (        <article className="row" key={menuItemIndex}>
          <div className="item"><input onChange={(e) => this.updateMenuItemName(e, menuItemIndex)} value={menuItem.name}/></div>
          <div className="item"><input type="number" onChange={(e) => this.updateMenuItemPrice(e, menuItemIndex)} value={menuItem.price} /></div>
          <div className="item"><input type="number" onChange={(e) => this.updateMenuItemInventory(e, menuItemIndex)} value={menuItem.inventory} /></div>
          <div className="item"><textarea onChange={(e) => this.updateMenuItemDescription(e, menuItemIndex)} value={menuItem.description} /></div>
          <div className="item">{this.renderMenuItemButtons(menuItem, menuItemIndex)}</div>
        </article>
      );
    });
    return (      <div className="menu-item-container">
        <div className="row header">
          <div className="item">Name</div>
          <div className="item">Price</div>
          <div className="item">Inventory</div>
          <div className="item">Description</div>
          <div className="item"></div>
        </div>
        {menuItems}
      </div>
    );
  }
  render() {
    if (!this.state.menu) {      return <div className="Menu"></div>    }
    const menu = this.state.menu;
    return (      <div className="Menu">
        <div className="title">
          <input onChange={this.updateMenuTitle} value={menu.title} placeholder="Menu Title" />
          {this.renderMenuButtons()}
        </div>        {this.renderMenuItems()}
        <a className="button add" onClick={this.addMenuItem}>Add Menu Item</a>
      </div>
    );
  }
}
export default withRouter(Menu);
