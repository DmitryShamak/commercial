module.exports = [{
  id: "home",
  title: "Home",
  subtitle: "sweet home",

  items: [{
    type: "header",
    class: "margin-top-md fixed-by-width",
    content: {
      text: "legal and advisory services"
    }
  }, {
    type: "subtitle",
    content: {
      text: "Our company specializes in legal consulting business"
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
          title: "Experience",
          text: "The accumulated experience allows us.."
        }, {
          icon: "icon-briefcase",
          title: "our customers",
          text: "80 percent of our customers are companies from the IT sphere"
        }, {
          icon: "icon-documents",
          title: "blah blah blah",
          text: "Aenean porta condimentum lacus, sed tempor purus euismod ut"
        }]
      }
    }
  }, {
    type: "header",
    content: {
      class: "margin-top-md",
      text: "blah blah blah"
    }
  }, {
    type: "subtitle",
    content: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at efficitur tellus. Mauris mi orci, pulvinar ac ipsum in, ornare vestibulum tellus. Cras erat orci, rutrum vitae nibh in, posuere eleifend ipsum. Aenean consequat justo congue nulla porta, nec sagittis bibendum."
    }
  }, {
    type: "info",
    class: "margin-top-md margin-bottom-sm",
    content: {
      header: {
        class: "margin-bottom-sm",
        text: "Why choose us"
      },
      list: {
        size: 12,
        class: "fixed-by-width text-capitalize",
        itemClass: "text-big",
        items: [{
          text: "Confidentiality"
        }, {
          text: "Work experience in the field of law for over 10 years"
        }, {
          text: "Certified lawyer licensed"
        }, {
          text: "Experience in state control and supervisory bodies"
        }, {
          text: "Conducting cases in court"
        }, {
          text: "Working with bailiffs experience"
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
      text: "About"
    }
  }, {
    type: "subtitle",
    content: {
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    }
  }]
}, {
  id: "services",
  title: "Services",

  items: [{
    type: "header",
    class: "margin-top-md",
    content: {
      text: "Services provided include"
    }
  }, {
    type: "list",
    class: "margin-top-sm fixed-by-width",
    content: {
      id: "registration-and-reorganization",
      title: "Registration and reorganization of legal entities",
      itemClass: "text-big",
      items: [{
        text: "Detailed study of constituent documents"
      }, {
        text: "Bringing the constituent documents in compliance with the law"
      }, {
        text: "Registration and reorganization of legal entities branches and representative offices"
      }, {
        text: "Registration of branches and representative offices"
      }, {
        text: "Amendments and preparation of the new edition of the Charter"
      }, {
        text: "Support for the purchase and sale transactions of shares in the authorized capital"
      }, {
        text: "Change of name of a legal entity"
      }, {
        text: "Document preparation"
      }]
    }
  }, {
    type: "list",
    class: "margin-top-sm fixed-by-width",
    content: {
      id: "support-economic-activity",
      title: "Support economic activity",
      itemClass: "text-big",
      items: [{
        text: "Work with personnel"
      }, {
        text: "Advice on legal aspects of doing business"
      }, {
        text: "Drafting and legal examination of economic contracts"
      }, {
        text: "Obtaining a special permit for labor activity in the Republic of Belarus for foreign citizens"
      }, {
        text: "Obtaining licenses and special permits"
      }, {
        text: "Obtaining patents"
      }, {
        text: "Copyright protection"
      }]
    }
  }, {
    type: "list",
    class: "margin-top-sm fixed-by-width",
    content: {
      id: "with-claims-related-work",
      title: "With claims related work",
      itemClass: "text-big",
      items: [{
        text: "Negotiation and settlement of disputes out of court"
      }, {
        text: "Preparation of claim letters"
      }, {
        text: "Preparation of applications to commit the executive inscriptions"
      }, {
        text: "Support of debt collection"
      }]
    }
  }, {
    type: "list",
    class: "margin-top-sm fixed-by-width",
    content: {
      id: "administrative-law",
      title: "Work in the field of administrative law",
      itemClass: "text-big",
      items: [{
        text: "Support and legal protection in cases of administrative offenses"
      }]
    }
  }, {
    type: "list",
    class: "margin-top-sm fixed-by-width",
    content: {
      id: "counseling",
      title: "Counseling",
      itemClass: "text-big",
      items: [{
        text: "Consultancy in the field of law"
      }, {
        text: "Preparation of official requests"
      }]
    }
  }]
}, {
  id: "contact",
  title: "Contact",

  items: [{
    type: "header",
    class: "margin-top-md",
    content: {
      text: "Contact"
    }
  }, {
    type: "subtitle",
    content: {
      text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
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
}, {
  id: "footer",
  items: [{
    type: "footer",
    content: {
      class: "margin-top-md module-lg",
      items: [{
        label: "Email",
        value: "name@email.dom",
        doNotTranslate: true,
        class: "text-right"
      }, {
        label: "Telephone",
        value: "+375 (29) 171 16 54",
        doNotTranslate: true,
        class: "text-center"
      }, {
        label: "Address",
        value: "Address Text",
        class: "text-left"
      }],
      copyright: "Copyright"
    }
  }]
}];