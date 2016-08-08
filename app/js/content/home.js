module.exports = [{
  id: "home",
  title: "Home",
  subtitle: "sweet home",

  items: [{
    type: "header",
    class: "margin-top-md fixed-by-width",
    content: {
      value: "legal and advisory services"
    }
  }, {
    type: "subtitle",
    content: {
      value: "Our company specializes in legal consulting business"
    }
  }, {
    type: "background",
    content: {
      class: "margin-top-md bg-dark-60",
      image: "https://wallpaperscraft.com/image/city_street_house_sidewalk_58870_1600x1200.jpg",
      //image: "http://templates.mycookroom.ru/Stone-v1.0.1/Site/assets/images/module-5.jpg",
      statistic: {
        iconClass: "text-giant margin-bottom-xs",
        titleClass: "text-huge text-bold",
        textClass: "text-big",
        size: 4,
        items: [{
          icon: "icon-trophy",
          titleValue: "Experience",
          value: "The accumulated experience allows us.."
        }, {
          icon: "icon-briefcase",
          titleValue: "our customers",
          value: "80 percent of our customers are companies from the IT sphere"
        }, {
          icon: "icon-documents",
          titleValue: "blah blah blah",
          value: "Aenean porta condimentum lacus, sed tempor purus euismod ut"
        }]
      }
    }
  }, {
    type: "header",
    content: {
      class: "margin-top-md",
      value: "blah blah blah"
    }
  }, {
    type: "subtitle",
    content: {
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at efficitur tellus. Mauris mi orci, pulvinar ac ipsum in, ornare vestibulum tellus. Cras erat orci, rutrum vitae nibh in, posuere eleifend ipsum. Aenean consequat justo congue nulla porta, nec sagittis bibendum."
    }
  }, {
    type: "info",
    class: "margin-top-md margin-bottom-sm",
    content: {
      header: {
        class: "margin-bottom-sm",
        value: "why_choose_us"
      },
      list: {
        size: 12,
        class: "fixed-by-width text-capitalize",
        itemClass: "text-big",
        items: [{
          value: "Confidentiality"
        }, {
          value: "Work experience in the field of law for over 10 years"
        }, {
          value: "Certified lawyer licensed"
        }, {
          value: "Experience in state control and supervisory bodies"
        }, {
          value: "Conducting cases in court"
        }, {
          value: "Working with bailiffs experience"
        }]
      }
    }
  }]
}, {
  id: "about",
  title: "About",

  items: [{
    type: "header",
    class: "margin-top-md",
    content: {
      value: "About"
    }
  }, {
    type: "subtitle",
    content: {
      value: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    }
  }]
}, {
  id: "contact",
  title: "Contact",

  items: [{
    type: "header",
    class: "margin-top-md",
    content: {
      value: "Contact"
    }
  }, {
    type: "subtitle",
    content: {
      value: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    }
  }, {
    type: "form",
    class: "margin-top-md",
    content: {
      title: "LET’S TALK",
      subtitle: "eque porro quisquam est qui dolorem ipsum quia dolor sit amet",

      submitUrl: "",
      items: [{
        type: "input",
        content: {
          label: "Name"
        }
      }, {
        type: "input",
        content: {
          label: "Email"
        }
      }, {
        type: "textarea",
        content: {
          label: "Message",
          rows: 5
        }
      }, {
        type: "submit",
        content: {
          label: "Submit"
        }
      }]
    }
  }]
}];