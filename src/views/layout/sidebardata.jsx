
export const SidebarData = [


{
    tittle: 'MAIN',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Dashboard',
        hasSubRoute: true,
        showSubRoute: false,
        route: "#",
        icon: "la la-dashcube",
        subMenus: [
          {
            menuValue: 'Admin Dashboard',
            route: "/admin-dashboard",
          },
          // {
          //   menuValue: 'Employee Dashboard',
          //   route: "/employee-dashboard",
          // },
          // {
          //   menuValue: 'Deals Dashboard',
          //   route: "/deals-dashboard",
          // },
          // {
          //   menuValue: 'Leads Dashboard',
          //   route: "/leads-dashboard",
          // },
        ],
      },
      // {
      //   menuValue: 'Apps',
      //   hasSubRoute: true,
      //   showSubRoute: false,
      //   route: "#",
      //   icon: "la la-cube",
      //   subMenus: [
      //     {
      //       menuValue: 'Chats',
      //       route: "/chat",
      //     },
      //     {
      //       menuValue: 'Calls',
      //       route: "#",
      //       showMenuRoute: true,
      //       subMenusValues: [
      //           {
      //               menuValue: 'Voice Call',
      //               route: "/voice-call",
      //             },
      //           {
      //               menuValue: 'Video Call',
      //               route: "/video-call",
      //             },
      //           {
      //               menuValue: 'Outgoing Call',
      //               route: "/outgoing-call",
      //             },
      //           {
      //               menuValue: 'Incoming Call',
      //               route: "/incoming-call",
      //             },
      //       ]
      //     },
      //     {
      //       menuValue: 'Calendar',
      //       route: "/events",
      //     },
      //     {
      //       menuValue: 'Contacts',
      //       route: "/contacts",
      //     },
      //     {
      //       menuValue: 'Email',
      //       route: "/inbox",
      //     },
      //     {
      //       menuValue: 'File Manager',
      //       route: "/file-manager",
      //     },
      //   ],
      // },
    ],
  },
  {
    tittle: 'EMPLOYEES',
    showAsTab: false,
    separateRoute: false,
    menu: [
      // {
      //   menuValue: 'Employees',
      //   hasSubRoute: true,
      //   showSubRoute: false,
      //   route: "#",
      //   icon: "la la-user",
      //   subMenus: [
      //     {
      //       menuValue: 'All Employees',
      //       route: "/employees",
      //     },
      //     {
      //       menuValue: 'Holidays',
      //       route: "/holidays",
      //     },
      //     {
      //       menuValue: 'Leaves(Admin)',
      //       route: "/adminleaves",
      //     },
      //     {
      //       menuValue: 'Leaves(Employee)',
      //       route: "/leaves-employee",
      //     },
      //     {
      //       menuValue: 'Leave Settings',
      //       route: "/leave-settings",
      //     },
      //     {
      //       menuValue: 'Attendance (Admin)',
      //       route: "/adminattendance",
      //     },
      //     {
      //       menuValue: 'Attendance (Employee)',
      //       route: "/attendance-employee",
      //     },
      //     {
      //       menuValue: 'Departments',
      //       route: "/departments",
      //     },
      //     {
      //       menuValue: 'Designations',
      //       route: "/designations",
      //     },
      //     {
      //       menuValue: 'Timesheet',
      //       route: "/timesheet",
      //     },
      //     {
      //       menuValue: 'Shift & Schedule',
      //       route: "/shift-scheduling",
      //     },
      //     {
      //       menuValue: 'Overtime',
      //       route: "/overtime",
      //     },
      //   ],
      // },
      // {
      //   menuValue: 'Clients',
      //   hasSubRoute: false,
      //   showSubRoute: false,
      //   route: "/clients",
      //   icon: "la la-users",
      // },
    
      // {
      //   menuValue: 'Projects',
      //   hasSubRoute: true,
      //   showSubRoute: false,
      //   icon: "la la-rocket",
      //   subMenus: [
      //     {
      //       menuValue: 'Projects',
      //       route: "/projects",
      //     },
      //     {
      //       menuValue: 'Tasks',
      //       route: "/tasks",
      //     },
      //     {
      //       menuValue: 'Tasks Board',
      //       route: "/task-board",
      //     },
      //   ],
      // },
      {
        menuValue: 'Tickets',
        hasSubRoute: true,
        showSubRoute: false,
        icon: "la la-ticket",
        subMenus: [
          {
            menuValue: 'Tickets',
            route: "/tickets",
          },
          // {
          //   menuValue: 'Ticket Details',
          //   route: "/ticket-details",
          // },
        
        ],
      },
    ],
  },
  {
    tittle: 'CRM',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        menuValue: 'Contacts',
        hasSubRoute: false,
        showSubRoute: false,
        route: "/contact-list",
        icon: "la la-user-shield",
      },
      {
        menuValue: 'Companies',
        hasSubRoute: false,
        showSubRoute: false,
        route: "/companies",
        icon: "la la-building",
      },
      // {
      //   menuValue: 'Deals',
      //   hasSubRoute: false,
      //   showSubRoute: false,
      //   route: "/deals",
      //   icon: "la la-cubes",
      // },
      // {
      //   menuValue: 'Leads',
      //   hasSubRoute: false,
      //   showSubRoute: false,
      //   route: "/leads-list",
      //   icon: "la la-chart-area",
      // },
      // {
      //   menuValue: 'Pipeline',
      //   hasSubRoute: false,
      //   showSubRoute: false,
      //   route: "/pipeline",
      //   icon: "la la-exchange-alt",
      // },
      // {
      //   menuValue: 'Analytics',
      //   hasSubRoute: false,
      //   showSubRoute: false,
      //   route: "/analytics",
      //   icon: "la la-dice",
      // },
      {
        menuValue: 'Activities',
        hasSubRoute: false,
        showSubRoute: false,
        route: "/activities",
        icon: "la la-directions",
      },
    ],
  },
  // {
  //   tittle: 'HR',
  //   showAsTab: false,
  //   separateRoute: false,
  //   menu: [
    
    
  //     {
  //       menuValue: 'Sales',
  //       hasSubRoute: true,
  //       showSubRoute: false,
  //       icon: "la la-files-o",
  //       subMenus: [
  //         {
  //           menuValue: 'Estimates',
  //           route: "/estimates",
  //         },
  //         {
  //           menuValue: 'Invoices',
  //           route: "/invoices",
  //         },
  //         {
  //           menuValue: 'Payments',
  //           route: "/payments",
  //         },
  //         {
  //           menuValue: 'Expenses',
  //           route: "/expenses",
  //         },
  //         {
  //           menuValue: 'Provident Fund',
  //           route: "/provident-fund",
  //         },
  //         {
  //           menuValue: 'Taxes',
  //           route: "/taxes",
  //         },
  //       ],
  //     },
  //     {
  //       menuValue: 'Accounting',
  //       hasSubRoute: true,
  //       showSubRoute: false,
  //       icon: "la la-files-o",
  //       subMenus: [
  //         {
  //           menuValue: 'Categories',
  //           route: "/categories",
  //         },
  //         {
  //           menuValue: 'Budgets',
  //           route: "/budgets",
  //         },
  //         {
  //           menuValue: 'Budget Revenues',
  //           route: "/budget-revenues",
  //         },
  //         {
  //           menuValue: 'Budget Expenses',
  //           route: "/budget-expenses",
  //         },
         
  //       ],
  //     },

  //     {
  //       menuValue: 'Payroll',
  //       hasSubRoute: true,
  //       showSubRoute: false,
  //       icon: "la la-money",
  //       subMenus: [
  //         {
  //           menuValue: 'Employee Salary',
  //           route: "/salary",
  //         },
  //         {
  //           menuValue: 'Payslip',
  //           route: "/salary-view",
  //         },
  //         {
  //           menuValue: 'Payroll Items',
  //           route: "/payroll-items",
  //         },
         
         
  //       ],
  //     },
  //     {
  //       menuValue: 'Policies',
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       route: "/policies",
  //       icon: "la la-file-pdf-o",
  //     },
  //     {
  //       menuValue: "Reports",
  //       hasSubRoute: true,
  //       showSubRoute: false,
  //       icon: "la la-chart-pie",
  //       subMenus: [
  //         {
  //           menuValue: "Expense Report",
  //           route: "/expense-reports"
  //         },
  //         {
  //           menuValue: "Invoice Report",
  //           route: "/invoice-reports"
  //         },
  //         {
  //           menuValue: "Payments Report",
  //           route: "/payments-reports"
  //         },
  //         {
  //           menuValue: "Project Report",
  //           route: "/project-reports"
  //         },
  //         {
  //           menuValue: "Task Report",
  //           route: "/task-reports"
  //         },
  //         {
  //           menuValue: "User Report",
  //           route: "/user-reports"
  //         },
  //         {
  //           menuValue: "Employee Report",
  //           route: "/employee-reports"
  //         },
  //         {
  //           menuValue: "Payslip Report",
  //           route: "/payslip-reports"
  //         },
  //         {
  //           menuValue: "Attendance Report",
  //           route: "/attendance-reports"
  //         },
  //         {
  //           menuValue: "Leave Report",
  //           route: "/leave-reports"
  //         },
  //         {
  //           menuValue: "Daily Report",
  //           route: "/daily-reports"
  //         }
  //       ]
  //     }
  //   ],
  // },
  // {
  //   tittle: 'PERFORMANCE',
  //   showAsTab: false,
  //   separateRoute: false,
  //   menu: [
  //       {
  //           menuValue: "Performance",
  //           hasSubRoute: true,
  //           showSubRoute: false,
  //           icon: "la la-graduation-cap",
  //           subMenus: [
  //             {
  //               menuValue: "Performance Indicator",
  //               route: "/performance-indicator"
  //             },
  //             {
  //               menuValue: "Performance Review",
  //               route: "/performance"
  //             },
  //             {
  //               menuValue: "Performance Appraisal",
  //               route: "/performance-appraisal"
  //             }
  //           ]
  //         },

  //         {
  //           menuValue: "Goals",
  //           hasSubRoute: true,
  //           showSubRoute: false,
  //           icon: "la la-crosshairs",
  //           subMenus: [
  //             {
  //               menuValue: "Goal List",
  //               route: "/goal-tracking"
  //             },
  //             {
  //               menuValue: "Goal Type",
  //               route: "/goal-type"
  //             }
  //           ]
  //         },
  //         {
  //           menuValue: "Training",
  //           hasSubRoute: true,
  //           showSubRoute: false,
  //           icon: "la la-edit",
  //           subMenus: [
  //             {
  //               menuValue: "Training List",
  //               route: "/training"
  //             },
  //             {
  //               menuValue: "Trainers",
  //               route: "/trainers"
  //             },
  //             {
  //               menuValue: "Training Type",
  //               route: "/training-type"
  //             }
  //           ]
  //         },
  //         {
  //           menuValue: 'Promotion',
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           route: "/promotion",
  //           icon: "la la-bullhorn",
  //         },
  //         {
  //           menuValue: 'Resignation',
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           route: "/resignation",
  //           icon: "la la-external-link-square",
  //         },
  //         {
  //           menuValue: 'Termination',
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           route: "/termination",
  //           icon: "la la-times-circle",
  //         },

          
  //   ],
  // },

  {
    tittle: 'ADMINISTRATION',
    showAsTab: false,
    separateRoute: false,
    menu: [
        // {
        //     menuValue: 'Assets',
        //     hasSubRoute: false,
        //     showSubRoute: false,
        //     route: "/assets",
        //     icon: "la la-object-ungroup",
        //   },
        //   {
        //     menuValue: "Jobs",
        //     hasSubRoute: true,
        //     showSubRoute: false,
        //     icon: "la la-briefcase",
        //     subMenus: [
        //       {
        //         menuValue: "User Dasboard",
        //         route: "/user-dashboard"
        //       },
        //       {
        //         menuValue: "Jobs Dasboard",
        //         route: "/jobs-dashboard"
        //       },
        //       {
        //         menuValue: "Manage Jobs",
        //         route: "/jobs"
        //       },
        //       {
        //         menuValue: "Manage Resumes",
        //         route: "/manage-resumes"
        //       },
        //       {
        //         menuValue: "Shortlist Candidates",
        //         route: "/shortlist-candidates"
        //       },
        //       {
        //         menuValue: "Interview Questions",
        //         route: "/interview-questions"
        //       },
        //       {
        //         menuValue: "Offer Approvals",
        //         route: "/offer_approvals"
        //       },
        //       {
        //         menuValue: "Experience Level",
        //         route: "/experiance-level"
        //       },
        //       {
        //         menuValue: "Candidates List",
        //         route: "/candidates"
        //       },
        //       {
        //         menuValue: "Schedule timing",
        //         route: "/schedule-timing"
        //       },
        //       {
        //         menuValue: "Aptitude Results",
        //         route: "/apptitude-result"
        //       }
        //     ]
        //   },
        //   {
        //     menuValue: 'Knowledgebase',
        //     hasSubRoute: false,
        //     showSubRoute: false,
        //     route: "/knowledgebase",
        //     icon: "la la-question",
        //   },
          {
            menuValue: 'Users',
            hasSubRoute: false,
            showSubRoute: false,
            route: "/users",
            icon: "la la-user-plus",
          },
          // {
          //   menuValue: 'Settings',
          //   hasSubRoute: false,
          //   showSubRoute: false,
          //   route: "/company-settings",
          //   icon: "la la-cog",
          // },
      
    ],
  },
  // {
  //   tittle: 'PAGES',
  //   showAsTab: false,
  //   separateRoute: false,
  //   menu: [
  //       {
  //           menuValue: "Profile",
  //           hasSubRoute: true,
  //           showSubRoute: false,
  //           icon: "la la-user-tag",
  //           subMenus: [
  //             {
  //               menuValue: "Employee Profile",
  //               route: "/profile"
  //             },
  //             {
  //               menuValue: "Client Profile",
  //               route: "/client-profile"
  //             }
  //           ]
  //         },
  //         {
  //           menuValue: "Authentication",
  //           hasSubRoute: true,
  //           showSubRoute: false,
  //           icon: "la la-key",
  //           subMenus: [
  //             {
  //               menuValue: "Login",
  //               route: "/"
  //             },
  //             {
  //               menuValue: "Register",
  //               route: "/register"
  //             },
  //             {
  //               menuValue: "Forgot Password",
  //               route: "/forgot-password"
  //             },
  //             {
  //               menuValue: "OTP",
  //               route: "/otp"
  //             },
  //             {
  //               menuValue: "Lock Screen",
  //               route: "/lock-screen"
  //             }
  //           ]
  //         },
  //         {
  //           menuValue: "Error Pages",
  //           hasSubRoute: true,
  //           showSubRoute: false,
  //           icon: "la la-exclamation-triangle",
  //           subMenus: [
  //             {
  //               menuValue: "404 Error",
  //               route: "/error-404"
  //             },
  //             {
  //               menuValue: "500 Error",
  //               route: "/error-500"
  //             }
  //           ]
  //         },
  //         {
  //           menuValue: "Subscriptions",
  //           hasSubRoute: true,
  //           showSubRoute: false,
  //           icon: "la la-history",
  //           subMenus: [
  //             {
  //               menuValue: "Subscriptions (Admin)",
  //               route: "/subscriptions"
  //             },
  //             {
  //               menuValue: "Subscriptions (Company)",
  //               route: "/subscriptions-company"
  //             },
  //             {
  //               menuValue: "Subscribed Companies",
  //               route: "/subscribed-companies"
  //             }
  //           ]
  //         },
  //         {
  //           menuValue: "Pages",
  //           hasSubRoute: true,
  //           showSubRoute: false,
  //           icon: "la la-columns",
  //           subMenus: [
  //             {
  //               menuValue: "Search",
  //               route: "/search"
  //             },
  //             {
  //               menuValue: "FAQ",
  //               route: "/faq"
  //             },
  //             {
  //               menuValue: "Terms",
  //               route: "/terms"
  //             },
  //             {
  //               menuValue: "Privacy Policy",
  //               route: "/privacy-policy"
  //             },
  //             {
  //               menuValue: "Blank Page",
  //               route: "/blank-page"
  //             },
  //             {
  //               menuValue: "Coming Soon",
  //               route: "/coming-soon"
  //             },
  //             {
  //               menuValue: "Under Maintenance",
  //               route: "/under-maintenance"
  //             }
  //           ]
  //         }
          
  //   ],
  // },
 
 
  
 
  // {
  //   tittle: 'UI INTERFACE',
  //   showAsTab: false,
  //   separateRoute: false,
  //   menu: [
  //       {
  //           menuValue: "Base UI",
  //           hasSubRoute: true,
  //           showSubRoute: false,
  //           icon: "lab la-uikit",
  //           subMenus: [
  //             { menuValue: "Alerts", route: "/alerts" },
  //             { menuValue: "Accordion", route: "/accordion" },
  //             { menuValue: "Avatar", route: "/avatar" },
  //             { menuValue: "Badges", route: "/badges" },
  //             { menuValue: "Border", route: "/borders" },
  //             { menuValue: "Buttons", route: "/buttons" },
  //             { menuValue: "Button Group", route: "/buttongroup" },
  //             { menuValue: "Breadcrumb", route: "/breadcrumb" },
  //             { menuValue: "Card", route: "/cards" },
  //             { menuValue: "Carousel", route: "/carousel" },
  //             { menuValue: "Colors", route: "/colors" },
  //             { menuValue: "Dropdowns", route: "/dropdowns" },
  //             { menuValue: "Grid", route: "/grid" },
  //             { menuValue: "Images", route: "/images" },
  //             { menuValue: "Lightbox", route: "/lightbox" },
  //             { menuValue: "Media", route: "/media" },
  //             { menuValue: "Modals", route: "/modals" },
  //             { menuValue: "Notification", route: "/notification" },
  //             { menuValue: "Offcanvas", route: "/offcanvas" },
  //             { menuValue: "Pagination", route: "/pagination" },
  //             { menuValue: "Popovers", route: "/popover" },
  //             { menuValue: "Progress", route: "/progress" },
  //             { menuValue: "Placeholders", route: "/placeholders" },
  //             { menuValue: "Range Slider", route: "/rangeslider" },
  //             { menuValue: "Spinner", route: "/spinner" },
  //             { menuValue: "Sweet Alerts", route: "/sweetalert" },
  //             { menuValue: "Tabs", route: "/nav-tabs" },
  //             { menuValue: "Toasts", route: "/toastr" },
  //             { menuValue: "Tooltips", route: "/tooltips" },
  //             { menuValue: "Typography", route: "/typography" },
  //             { menuValue: "Video", route: "/video" }
  //           ]
  //         },
  //         {
  //           menuValue: "Advanced UI",
  //           hasSubRoute: true,
  //           showSubRoute: false,
  //           icon: "la la-eject",
  //           subMenus: [
  //             { menuValue: "Ribbon", route: "/ribbon" },
  //             { menuValue: "Clipboard", route: "/clipboard" },
  //             { menuValue: "Drag & Drop", route: "/dragdrop" },
  //             { menuValue: "Range Slider", route: "/rangeslider" },
  //             { menuValue: "Rating", route: "/rating" },
  //             { menuValue: "Text Editor", route: "/text-editor" },
  //             { menuValue: "Counter", route: "/counter" },
  //             { menuValue: "Scrollbar", route: "/scrollbar" },
  //             { menuValue: "Sticky Note", route: "/stickynote" },
  //             { menuValue: "Timeline", route: "/timeline" }
  //           ]
  //         },
  //         {
  //           menuValue: "Charts",
  //           hasSubRoute: true,
  //           showSubRoute: false,
  //           icon: "la la-chart-line",
  //           subMenus: [
  //             { menuValue: "Apex Charts", route: "/apex-charts" },
  //             { menuValue: "Chart Js", route: "/chartjs" },
  //             { menuValue: "Morris Charts", route: "/morris-charts" },
  //             { menuValue: "Flot Charts", route: "/flot-charts" },
  //             { menuValue: "Peity Charts", route: "/peity-charts" },
  //             { menuValue: "C3 Charts", route: "/charts-c3" }
  //           ]
  //         },
  //         {
  //           menuValue: "Icons",
  //           hasSubRoute: true,
  //           showSubRoute: false,
  //           icon: "la la-icons",
  //           subMenus: [
  //             { menuValue: "Fontawesome Icons", route: "/fontawesome-icons" },
  //             { menuValue: "Feather Icons", route: "/feather-icons" },
  //             { menuValue: "Ionic Icons", route: "/ionic-icons" },
  //             { menuValue: "Material Icons", route: "/material-icons" },
  //             { menuValue: "Pe7 Icons", route: "/pe7-icons" },
  //             { menuValue: "Simpleline Icons", route: "/simpleline-icons" },
  //             { menuValue: "Themify Icons", route: "/themify-icons" },
  //             { menuValue: "Weather Icons", route: "/weather-icons" },
  //             { menuValue: "Typicon Icons", route: "/typicons" },
  //             { menuValue: "Flag Icons", route: "/flag-icons" }
  //           ]
  //         },
  //         {
  //           menuValue: "Forms",
  //           hasSubRoute: true,
  //           showSubRoute: false,
  //           icon: "la la-wpforms",
  //           subMenus: [
  //             { menuValue: "Basic Inputs", route: "/form-basic-inputs" },
  //             { menuValue: "Input Groups", route: "/form-input-groups" },
  //             { menuValue: "Horizontal Form", route: "/form-horizontal" },
  //             { menuValue: "Vertical Form", route: "/form-vertical" },
  //             { menuValue: "Form Mask", route: "/form-mask" },
  //             { menuValue: "Form Validation", route: "/form-validation" },
  //             { menuValue: "Form Select2", route: "/form-select2" },
  //             { menuValue: "File Upload", route: "/file-upload" },
  //             { menuValue: "Horizontal Timeline", route: "/horizontal-timeline" },
  //             { menuValue: "Form Wizard", route: "/form-wizard" }
  //           ]
  //         },
  //         {
  //           menuValue: "Tables",
  //           hasSubRoute: true,
  //           showSubRoute: false,
  //           icon: "la la-table",
  //           subMenus: [
  //             { menuValue: "Basic Tables", route: "/tables-basic" },
  //             { menuValue: "Data Table", route: "/data-tables" }
  //           ]
  //         }
          
  //   ],
  // },
  // {
  //   tittle: 'EXTRAS',
  //   showAsTab: false,
  //   separateRoute: false,
  //   menu: [
  //     {
  //       menuValue: 'Documentation',
  //       hasSubRoute: false,
  //       showSubRoute: false,       
  //       route: "#",
  //       icon: "la la-file-text",
  //     },

  //     {
  //       menuValue: 'Change Log',
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       route: "#",
  //       icon: "la la-info",
  //     },

  //     {
  //       menuValue: "Multi Level",
  //       hasSubRoute: true,
  //       showSubRoute: false,
  //       icon: "la la-share-alt",
  //       subMenus: [
  //         { menuValue: "Level 1", route: "#" },
         
  //       ]
  //     },
     
    
  //   ],
  // },
];
