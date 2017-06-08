import React from 'react';
import { MenuItem, Dropdown, Glyphicon } from 'react-bootstrap';

class HeaderMenu extends React.Component {
  static propTypes = {
    currentUserData: React.PropTypes.object,
    activeMainMenuName: React.PropTypes.string,
    activeSubMenuName: React.PropTypes.string,
    showHideDropdown: React.PropTypes.string
  };

  static defaultProps = {
    activeMainMenuName: 'Home',
    showHideDropdown: "dropdown",
    activeSubMenuName: null
  };

  constructor(props) {
    super(props);

    this.state = {
      oldOpenMenuName: null,
      currentOpenMenuName: null,
      showHideDropdown: "dropdown",
      activeMainMenuName: this.props.activeMainMenuName,
      activeSubMenuName: this.props.activeSubMenuName,
      activeLanguage: 'English'
    };
  }

   static contextTypes = {
    i18n: React.PropTypes.object,
    formatPatterns: React.PropTypes.object,
    dateTimePattern: React.PropTypes.string,
    setLocale: React.PropTypes.func
  }

  onLanguageChange = (locale, activeLanguage) => {
    this.setState({
      ...this.state,
      activeLanguage: activeLanguage
    })
    if(this.context.setLocale != null)
      this.context.setLocale(locale)
  }

  toggleDropDown() {
    const css = (this.state.showHideDropdown === "dropdown open") ? "dropdown" : "dropdown open";

    this.setState({ "showHideDropdown": css });
  }

  render() {
    const { showHideDropdown } = this.state;
    const { currentUserData } = this.props;
    
    return (
      <div className="navbar navbar-default navbar-main-menu" style={{ paddingRight: '25px' }}>
        <div className="navbar-header pull-right">
          <form className="navbar-form navbar-right">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search"/>
            </div>
            <button type="submit" className="btn btn-default">
              <span className="glyphicon glyphicon-search" />
            </button>
          </form>
          <ul className="nav navbar-nav navbar-no-collapse navbar-right">
            <li className={showHideDropdown}>
              <a
                className="dropdown-toggle hidden-sm hidden-xs"
                onClick={this.toggleDropDown.bind(this)}
                dataToggle="dropdown"
                href="#"
              >
                {currentUserData.id}
                <b className="caret" />
              </a>
              <a className="dropdown-toggle icon-nav-item visible-sm visible-xs" dataToggle="dropdown" href="#">
                <span className="glyphicon glyphicon-user" />
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-header">
                  Language
                </li>
                <li className="divider" />
                <li>
                  <a id="lanugage-de" onClick={this.onLanguageChange.bind('German', 'de')}>German</a>
                </li> 
                <li>
                  <a id="lanugage-en" onClick={this.onLanguageChange.bind('English', 'en')}>English</a>
                </li> 
                <li className="divider" />
                <li>
                  <a className="hidden" href="#">Change Assignment</a>
                </li>
                <li>
                  <a href="/auth/logout">Logout</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle hidden-sm hidden-xs" dataToggle="dropdown" href="#">
                { currentUserData.supplierid || currentUserData.customerid || "no tenant" }
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default HeaderMenu;