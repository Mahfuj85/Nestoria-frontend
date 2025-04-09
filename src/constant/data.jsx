import img1 from "../assets/images/slider-1.jpeg";
import img2 from "../assets/images/slider-2.webp";
import img3 from "../assets/images/slider-3.jpg";
import img4 from "../assets/images/slider-4.jpg";
import img5 from "../assets/images/slider-5.png";
import tImg1 from "../assets/images/testimg-1.avif";
import tImg2 from "../assets/images/testimg-2.jpeg";
import tImg3 from "../assets/images/testimg-3.jpg";
import tImg4 from "../assets/images/testimg-4.avif";
import tImg5 from "../assets/images/testimg-5.jpeg";
import tProperty1 from "../assets/images/testProperty-1.jpeg";
import tProperty2 from "../assets/images/testProperty-2.avif";
import tProperty3 from "../assets/images/testProperty-3.jpg";
import tProperty4 from "../assets/images/testProperty-4.jpg";
import tProperty5 from "../assets/images/testProperty-5.webp";
// import blog1 from "../assets/blog1.jpg";
// import blog2 from "../assets/blog2.jpg";
// import blog3 from "../assets/blog3.jpg";
// import blog4 from "../assets/blog4.jpg";

// icons
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

// properties data
export const PROPERTIES = [
  {
    title: "Tranquil Terrace Tranquility Haven",
    image: img1,
    category: "Cottage",
    address: "Via Roma 21",
    country: "Italy",
    city: "Florence",
    area: 450,
    price: 450,
    description:
      "Charming bungalow with modern amenities and scenic views, perfect for peaceful living.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1,
    },
  },
  {
    title: "Oceanview Oasis Serenity Escape",
    image: img2,
    category: "Residence",
    address: "Bondi Road 105",
    country: "Australia",
    city: "Sydney",
    area: 500,
    price: 600,
    description:
      "A beautiful residence with a stunning ocean view, perfect for a serene escape.",
    facilities: {
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2,
    },
  },
  {
    title: "Sunrise Sanctuary Solace Retreat",
    image: img3,
    category: "House",
    address: "Sakura Street 15",
    country: "Japan",
    city: "Kyoto",
    area: 420,
    price: 480,
    description:
      "A peaceful retreat with modern amenities and beautiful sunrise views.",
    facilities: {
      bedrooms: 2,
      bathrooms: 2,
      parkings: 1,
    },
  },
  {
    title: "Urban Elegance Sophistication Haven",
    image: img4,
    category: "Property",
    address: "Queen Street 77",
    country: "Canada",
    city: "Toronto",
    area: 550,
    price: 800,
    description:
      "An elegant urban property with sophisticated design and ample space.",
    facilities: {
      bedrooms: 5,
      bathrooms: 4,
      parkings: 3,
    },
  },
  {
    title: "Rustic Retreat Charm Cottage",
    image: img1,
    category: "Villa",
    address: "Carrer de Mallorca 9",
    country: "Spain",
    city: "Barcelona",
    area: 470,
    price: 700,
    description:
      "A charming rustic villa with modern amenities and scenic views.",
    facilities: {
      bedrooms: 3,
      bathrooms: 3,
      parkings: 2,
    },
  },
  {
    title: "Garden Grove Oasis Retreat Haven",
    image: img3,
    category: "Penthouse",
    address: "Rua Visconde de Pirajá 305",
    country: "Brazil",
    city: "Rio de Janeiro",
    area: 520,
    price: 680,
    description:
      "A luxurious penthouse with a garden grove and breathtaking views.",
    facilities: {
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2,
    },
  },
  {
    title: "Mountain Majesty Tranquility Haven",
    image: img2,
    category: "Home",
    address: "Bahnhofstrasse 88",
    country: "Switzerland",
    city: "Zurich",
    area: 480,
    price: 750,
    description:
      "A tranquil home with majestic mountain views and modern amenities.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1,
    },
  },
  {
    title: "Lakefront Lodge Haven Haven",
    image: img5,
    category: "Apartment",
    address: "Long Street 123",
    country: "South Africa",
    city: "Cape Town",
    area: 430,
    price: 500,
    description:
      "A cozy lakefront apartment with scenic views and modern amenities.",
    facilities: {
      bedrooms: 2,
      bathrooms: 2,
      parkings: 1,
    },
  },
  {
    title: "Serenity Shores Bliss Haven",
    image: img4,
    category: "Villa",
    address: "Sukhumvit Road 42",
    country: "Thailand",
    city: "Bangkok",
    area: 460,
    price: 520,
    description:
      "A serene villa with blissful surroundings and modern amenities.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1,
    },
  },
];

// properties data
// export const BLOGS = [
//   {
//     title: "Tranquil Terrace Tranquility Haven",
//     image: blog1,
//     category: "Cottage",
//   },
//   {
//     title: "Oceanview Oasis Serenity Escape",
//     image: blog2,
//     category: "Residence",
//   },
//   {
//     title: "Sunrise Sanctuary Solace Retreat",
//     image: blog3,
//     category: "House",
//   },
//   {
//     title: "Urban Elegance Sophistication Haven",
//     image: blog4,
//     category: "Property",
//   },
// ];

// TESTIMONIAL SECTION
export const TESTIMONIALS = [
  {
    name: "Michael Johnson",
    image: tImg1,
    comment:
      "From searching for listings to closing the deal, Nestoria was there every step of the way. It’s by far the best real estate platform I’ve used!",
    propertyImg: tProperty1,
  },
  {
    name: "Emma Richardson",
    image: tImg2,
    comment:
      "Nestoria made my home-buying journey so easy! The platform is intuitive, and I found my dream home in no time. Highly recommended!",
    propertyImg: tProperty2,
  },
  {
    name: "James Carter",
    image: tImg4,
    comment:
      "As a first-time home buyer, I had so many questions. Nestoria provided expert guidance and seamless tools that made the entire process stress-free!",
    propertyImg: tProperty3,
  },
  {
    name: "Sophia Martinez",
    image: tImg3,
    comment:
      "Selling my property was a breeze with Nestoria. Their platform connected me with serious buyers quickly, and I got the best deal hassle-free!",
    propertyImg: tProperty4,
  },
  {
    name: "James Thompson",
    image: tImg5,
    comment:
      "Nestoria turned what seemed like a complicated real estate process into an effortless experience. I’d recommend it to anyone looking for a new home!",
    propertyImg: tProperty5,
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Latest Items",
      "Hot Offers",
      "Popular residencies",
      "FAQ",
      "Privacy Policy",
    ],
  },
  {
    title: "Our Community",
    links: ["Terms and Conditions", "Special Offers", "Customer Reviews"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Contact Number", value: "123-456-7890" },
    { label: "Email Address", value: "info@ZenHomes.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    { icon: <FaFacebook />, id: "facebook" },
    { icon: <FaInstagram />, id: "instagram" },
    { icon: <FaTwitter />, id: "twitter" },
    { icon: <FaYoutube />, id: "youtube" },
    { icon: <FaLinkedin />, id: "linkedin" },
  ],
};
