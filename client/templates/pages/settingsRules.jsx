Utils.pages.addPage('settings/rules', {
    subnavbar: false,
    tabbarWithLabels: true,
    page: {class: React.createClass({
      mixins: [ReactMeteorData],

      getMeteorData () {
        return {pages: Pages.find({}).fetch()}
      },

      renderPages () {
        var PageMenuItem = Utils.elements.getElement('pageMenuItem');
        return this.data.pages.map((page) => {
            return <PageMenuItem key={page._id} page={page}/>;
          });
      },

      render () {
        return (
          <div className="page-wrapper" style={{height: 'calc(100% - 100px)', paddingTop: (Framework7.prototype.device.android===true?'72px':'0px'), paddingBottom: (Framework7.prototype.device.android===true?'55px':'0px')}}>
            <div className="page-content">
              <div className="content-block-title">Settings</div>
              <div className="content-block">

              </div>
            </div>
            {this.props.children}
          </div>
        );
      }
    }), props:{}},
    navbar: {class: Utils.elements.getElement('settingsNavbar'), props:{title:'Settings / Rules'}},
    toolbar: {class: Utils.elements.getElement('settingsTabbar'), props:{active:'settings/rules'}}
  });
