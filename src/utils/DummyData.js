import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const CardsData = [
    {
        class: "w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300",
        image: Single,
        title: "Single User",
        price: "$149",
        storage: "500 GB Storage",
        user: "1 Granted User",
        send: "Send up to 2 GB",
        button: "Start Trial",
        btnclass: "bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3",
    },
    {
        class: "w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300",
        image: Double,
        title: "Single User",
        price: "$199",
        storage: "500 GB Storage",
        user: "1 Granted User",
        send: "Send up to 2 GB",
        button: "Start Trial",
        btnclass: "bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3",
    },
    {
        class: "w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300",
        image: Triple,
        title: "Single User",
        price: "$299",
        storage: "500 GB Storage",
        user: "1 Granted User",
        send: "Send up to 2 GB",
        button: "Start Trial",
        btnclass: "bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3",
    }
];

const FooterData = [
    {
        title: "Solution",
        el_1: "Analytics",
        el_2: "Marketing",
        el_3: "Commerce",
        el_4: "Insights",
    },
    {
        title: "Support",
        el_1: "Pricing",
        el_2: "Documentation",
        el_3: "Guides",
        el_4: "Api Status",
    },
    {
        title: "Company",
        el_1: "About",
        el_2: "Blog",
        el_3: "Jobs",
        el_4: "Press",
        el_5: "Careers",
    },
    {
        title: "Legal",
        el_1: "Claim",
        el_2: "Policy",
        el_3: "Terms",
    }
]

export { CardsData, FooterData }