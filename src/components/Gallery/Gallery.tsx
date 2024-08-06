import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

const Gallery = () => {
  const data = [
    {
      label: "Indoor",
      value: "indoor",
      images: [
        {
          imageLink:
            "https://media.istockphoto.com/id/1403237341/photo/urban-jungle.webp?b=1&s=170667a&w=0&k=20&c=JZtSsShaUrpNrVW-ZGaaP9k8OJiuvk4Sz0BUgWpbk6Q=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1280154279/photo/give-your-home-a-good-dose-of-greenery.webp?b=1&s=170667a&w=0&k=20&c=-aSyKHwT49vNVoPtW30w0_kQH-pXMHIyQnc6fC-VrvA=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1166802385/photo/woman-watering-houseplants.webp?b=1&s=170667a&w=0&k=20&c=z_wg3SZzn1nol93h0Hr1w1VHYGCVzyhowYHDYBoTsAU=",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kb29yJTIwcGxhbnRzfGVufDB8fDB8fHww",
        },
        {
          imageLink:
            "https://plus.unsplash.com/premium_photo-1673203734665-0a534c043b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kb29yJTIwcGxhbnRzfGVufDB8fDB8fHww",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1365516053/photo/green-wall-empty-room-with-plants-on-a-wooden-floor.webp?b=1&s=170667a&w=0&k=20&c=jR1yal3ctlxUbxmMyWtuYEK3wSffDcr06IcAwg2gqBs=",
        },
      ],
    },
    {
      label: "Outdoor",
      value: "outdoor",
      images: [
        {
          imageLink:
            "https://media.istockphoto.com/id/690416076/photo/asian-little-girl-and-parent-planting-young-tree-on-black-soil-together.webp?b=1&s=170667a&w=0&k=20&c=j7zmRaZc7ruTOx4BCEUxM6ziQhyjtpD2zrkRXOn4DuY=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1357789296/photo/children-boys-and-girls-help-each-other-plant-trees-in-the-forest-learn-about-the-environment.webp?b=1&s=170667a&w=0&k=20&c=2RH2zBbrpFbZaOhkzRwrgLtls3JjasF1rwHrK94mXiY=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1156537866/photo/man-gardening-background.webp?b=1&s=170667a&w=0&k=20&c=8KggGyUWfhWBDG3ehpmdwU1IFy79NS-QvNmz6M4bjO0=",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1714731596406-e144f725acc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3V0ZG9vciUyMHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1163586960/photo/beautiful-garden-with-green-grass.webp?b=1&s=170667a&w=0&k=20&c=i6b14PGVnpTQezfkAP3Xb26uu6Q_7f5xdvtWxHe3zIw=",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1703430075832-558d2f113566?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG91dGRvb3IlMjBwbGFudHN8ZW58MHx8MHx8fDA%3D",
        },
      ],
    },
    {
      label: "Fruits",
      value: "fruits",
      images: [
        {
          imageLink:
            "https://media.istockphoto.com/id/116378367/photo/close-up-of-wet-lime-on-branch.webp?b=1&s=170667a&w=0&k=20&c=yo4PRq7mbYDryJ-hCL0X3BOAg7jazvCFdBNl9jsSt3Y=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/171308173/photo/fresh-organic-strawberry.webp?b=1&s=170667a&w=0&k=20&c=7kBVgyzzJwEfAaJ_ROmdQdYo-OL1L3HofC0vmrVh_yM=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1171900830/photo/orange-trees.webp?b=1&s=170667a&w=0&k=20&c=2m9oMLQ0gcelL-clayxvM0to-KZKvJbbNnJkLE_xg4s=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1095933940/photo/theyre-all-ripe-and-juicy.webp?b=1&s=170667a&w=0&k=20&c=czsFBMuXLx3CLXo03dtK2FOaZy_VyHoBjiBb9Q1FuW4=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1251703149/photo/orange-tree-plantation.webp?b=1&s=170667a&w=0&k=20&c=ukhutBtgtE_kjU-DTtupFlaVUOeIkcZmoS4a8dMyxyQ=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1177150352/photo/green-hass-avocados-fruit-hanging-in-the-tree.jpg?s=612x612&w=0&k=20&c=Hc6x-9a2MIvLy-Yrb_TdarapUlHR43NfiJfopGeEBd4=",
        },
      ],
    },
    {
      label: "Flower",
      value: "flower",
      images: [
        {
          imageLink:
            "https://media.istockphoto.com/id/1126841725/photo/spring-meadow.webp?b=1&s=170667a&w=0&k=20&c=T5OOBJu--j-BBnNFCcQNWY2cvxQHysiYvsbE6OHTOiw=",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1704813778605-475681242725?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyJTIwcGxhbnRzfGVufDB8fDB8fHww",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1711861334703-74990b85860b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlciUyMHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1694679377215-f2b51995afcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2VyJTIwcGxhbnRzfGVufDB8fDB8fHww",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/157523491/photo/gardening-hands.webp?b=1&s=170667a&w=0&k=20&c=UcCgci5C51-lX4dYr9rpCpNb5XxXcWXMEv3OE-tN97o=",
        },
      ],
    },
    {
      label: "Aquatic",
      value: "aquatic",
      images: [
        {
          imageLink:
            "https://media.istockphoto.com/id/2119097509/photo/lotus.webp?b=1&s=170667a&w=0&k=20&c=7wptakHteNqeKSVkHy_aKrflrwsrMTolXQRw-lva7c0=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1490214908/photo/anubias-barteri.jpg?s=612x612&w=0&k=20&c=GrOfHZ4X3D2UwM3pqoyyAPiifaDneIopCnExQtYyrnc=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1846443302/photo/beautiful-nature-landscape-red-lotus-sea-in-the-morning-thailand-lotus-red-lotus-sea.webp?b=1&s=170667a&w=0&k=20&c=N79sXH36JbQ0aCrmNlYB-qWQVaISD4OnGvKGzjzAZXo=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/2119093779/photo/lotus.jpg?s=612x612&w=0&k=20&c=leHEl9pY0_TblLqtOLJ8i-KgIN8OB2iZ8V_dFUeVDgw=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1951873475/photo/plants-in-a-home-fish-tank.jpg?s=612x612&w=0&k=20&c=EwEag1YXSc6hC-NJWnsS9no0GHvU4acssk8AYHDs670=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/146799216/photo/white-lotus-flower-and-leaves.jpg?s=612x612&w=0&k=20&c=-sRSRXMzZFcUY9Y_i2HdSIGL91SWl4efLoxWes2i4Cc=",
        },
      ],
    },
    {
      label: "Climbers",
      value: "climbers",
      images: [
        {
          imageLink:
            "https://media.istockphoto.com/id/1674139929/photo/kids-climbing-on-a-tree.webp?b=1&s=170667a&w=0&k=20&c=nM_xhaMnxRhha0nTkF2xgHA9fzE0UGi3qLOCx960vbw=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1432002183/photo/green-leaves-javanese-treebine-or-grape-ivy-jungle-vine-hanging-ivy-plant-bush-isolated-on.webp?b=1&s=170667a&w=0&k=20&c=TcykstAlAIn_bUKt_jcKF_hRlm8-U-2kWA3hdWL-6oE=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/143071967/photo/father-and-son-hugging-in-tree.webp?b=1&s=170667a&w=0&k=20&c=5DgP04hLBUGf8RwXX1DFTiGeGzOTdWx9NLctYC68qAA=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1219169504/photo/tropical-plants-bush-decor-indoor-garden-houseplant-nature-backdrop-vertical-garden-wall.jpg?s=612x612&w=0&k=20&c=IeTJOnMn5NwhNUQFYXJMu9ONLKZkYBz2SxXtX_d-yO0=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/1674139904/photo/kids-playing-on-a-tree.jpg?s=612x612&w=0&k=20&c=H9QJXj3nOhjxLauqCsI-8GN4YrAaaJv5pb-UkegJW_w=",
        },
        {
          imageLink:
            "https://media.istockphoto.com/id/2163628856/photo/a-male-proboscis-monkey-in-a-tree-in-the-rainforest-of-tanjung-puting-national-park-on-the.jpg?s=612x612&w=0&k=20&c=zhsLsNdK_w-qc6Rb5FUSfB-jDPeyi_PqyYJld6kJjZA=",
        },
      ],
    },
  ];

  return (
    <div className="mx-4 ">
      <h2 className="text-2xl text-center font-bold text-[#1B3048] lg:text-4xl dark:text-white mb-8">
        Explore our <span className="text-[#275fa0]">Image Gallery</span>
      </h2>
      <Tabs value="indoor">
        <TabsHeader
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}
            placeholder="" 
        onPointerEnterCapture={() => {}} 
        onPointerLeaveCapture={() => {}}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
         placeholder="" 
         onPointerEnterCapture={() => {}} 
         onPointerLeaveCapture={() => {}}
        className="grid grid-cols-1 gap-4 ">
          {data.map(({ value, images }) => (
            <TabPanel
              className="grid grid-cols-2 gap-4 md:grid-cols-3"
              key={value}
              value={value}
            >
              {images?.map(({ imageLink }, index) => (
                <div key={index}>
                  <img
                    className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                    src={imageLink}
                    alt="image-photo"
                  />
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};
export default Gallery;
