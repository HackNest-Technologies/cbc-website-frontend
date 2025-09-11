import christian from "../assets/images/christain.jpg"
import fiction from "../assets/images/fiction.jpg"
import children from "../assets/images/children.jpg"
import bible from "../assets/images/bible.jpg"


const bookCategories = [
  {
    id: 1,
    category: "Christian Living",
    bgImg: christian,
    path: "/category/Christian%20Living",
    
  },

  {
    id: 2,
    category: "Fiction",
    bgImg: fiction,
    path: "/category/fiction",
  },
  {
    id: 3,
    category: "Children's Books",
    bgImg: children,
    path: "/category/Children%27s%20Books",
  },
  {
    id: 4,
    category: "Bibles",
    bgImg: bible,
    path: "/category/bibles",
  },

  {
    id: 5,
    category: "References",
    bgImg: bible,
    path: "/category/refrences",
  },

  {
    id: 6,
    category: "Journals",
    bgImg: fiction,
    path: "/category/journals",
  },
  {
    id: 7,
    category: "Theology",
    bgImg: christian,
    path: "/category/theology",
  },
  {
    id: 8,
    category: "Devotionals",
    bgImg: children,
    path: "/category/devotionals",
  },
];

export default bookCategories;
