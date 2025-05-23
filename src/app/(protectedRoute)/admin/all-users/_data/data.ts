import { TUser } from "@/types";

export const dummyUsers: TUser[] = [
    {
      id: "64bfaebe-d125-4db0-b2d7-6bd763581886",
      name: "Rashedul Islam Rajib",
      email: "rashed5570@gmail.com",
      password: "$2b$12$EJFmCtSVEoJHrvh0dNtlC.FalwBC5wArPGXYL3HTYzW4fVgUA.ZJi",
      passwordChangedAt: null,
      image: null,
      role: "MEMBER",
      isActive: true,
      createdAt: "2025-05-01T12:53:52.593Z",
      updatedAt: "2025-05-01T12:53:52.593Z",
      votes: [],
      payments: [
        {
          id: "f1a647f9-c434-4b73-9f0f-70e55f089f02",
          userId: "64bfaebe-d125-4db0-b2d7-6bd763581886",
          ideaId: "a4fbb75e-1f73-45e5-b840-c06be22fc41e",
          amount: 15.36,
          status: "Pending",
          transactionId: "811128pxrtjqbzqt",
          gatewayResponse: null,
          createdAt: "2025-05-03T06:46:51.129Z",
        },
      ],
      comments: [],
      ideas: [
        {
          id: "a4fbb75e-1f73-45e5-b840-c06be22fc41e",
          title: "Community Solar Panel Project",
          problemStatement: "High energy costs and carbon emissions in our neighborhood.",
          solution: "Install shared solar panels on community buildings to reduce reliance on fossil fuels.",
          description:
            "This project aims to reduce energy bills and carbon emissions by installing solar panels on public buildings. Surplus energy can be shared or sold back to the grid.",
          images: ["https://res.cloudinary.com/dbe3ewhey/image/upload/v1746188612/pb2qmaqwoqoz6u6wekds.png"],
          isPaid: false,
          price: 15.36,
          status: "UNDER_REVIEW",
          feedback: null,
          categoryId: "0b017e4c-8cd5-48bc-b495-e2b3f2e5cef2",
          authorId: "64bfaebe-d125-4db0-b2d7-6bd763581886",
          isDeleted: false,
          createdAt: "2025-05-02T12:23:33.239Z",
          updatedAt: "2025-05-02T12:23:33.239Z",
        },
      ],
    },
    // Adding more sample users for demonstration
    {
      id: "75cgbfcf-e236-5ec1-c3e8-7ce874692997",
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      password: "$2b$12$hashed_password_example",
      passwordChangedAt: "2025-04-15T10:30:00.000Z",
      image: null,
      role: "MEMBER",
      isActive: true,
      createdAt: "2025-01-12T09:45:00.000Z",
      updatedAt: "2025-04-15T10:30:00.000Z",
      votes: [],
      payments: [],
      comments: [],
      ideas: [
        {
          id: "b5fcc86f-2g84-56f6-c951-d17cf33gd52f",
          title: "Neighborhood Wind Turbine Initiative",
          problemStatement: "Dependency on non-renewable energy sources.",
          solution: "Install small-scale wind turbines in strategic locations around the neighborhood.",
          description:
            "This project proposes installing small wind turbines that can generate electricity for common areas and potentially feed back into the grid during high-wind periods.",
          images: [],
          isPaid: true,
          price: 25.99,
          status: "APPROVED",
          feedback: "Great initiative! Let's proceed with implementation.",
          categoryId: "0b017e4c-8cd5-48bc-b495-e2b3f2e5cef2",
          authorId: "75cgbfcf-e236-5ec1-c3e8-7ce874692997",
          isDeleted: false,
          createdAt: "2025-04-15T09:45:21.123Z",
          updatedAt: "2025-04-20T14:30:45.789Z",
        },
        {
          id: "c6gdd97g-3h95-67g7-d062-e28dg44he63g",
          title: "Community Composting Program",
          problemStatement: "Excessive organic waste going to landfills.",
          solution: "Create a neighborhood composting system to reduce waste and create fertilizer.",
          description:
            "This project will establish community composting bins and education programs to help residents reduce organic waste while creating valuable compost for community gardens.",
          images: [],
          isPaid: false,
          price: 0,
          status: "DRAFT",
          feedback: "Implementation is going well. Consider adding more collection points.",
          categoryId: "1c128f5d-9de6-59cd-c506-f3c4g3f6def3",
          authorId: "75cgbfcf-e236-5ec1-c3e8-7ce874692997",
          isDeleted: false,
          createdAt: "2025-03-10T11:20:15.456Z",
          updatedAt: "2025-04-25T16:40:33.222Z",
        },
      ],
    },
    {
      id: "86dhcgdg-f347-6fd2-d4f9-8df985703008",
      name: "Michael Chen",
      email: "michael.chen@example.com",
      password: "$2b$12$another_hashed_password",
      passwordChangedAt: null,
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      role: "ADMIN",
      isActive: true,
      createdAt: "2025-01-15T10:20:00.000Z",
      updatedAt: "2025-01-15T10:20:00.000Z",
      votes: [],
      payments: [
        {
          id: "g2b758g0-d545-5c84-0g1g-81f66g190g13",
          userId: "86dhcgdg-f347-6fd2-d4f9-8df985703008",
          ideaId: "d7hee08h-4i06-78h8-e173-f39eh55if74h",
          amount: 18.75,
          status: "Completed",
          transactionId: "922239qysukrcaru",
          gatewayResponse: null,
          createdAt: "2025-02-10T14:22:33.456Z",
        },
        {
          id: "h3c869h1-e656-6d95-1h2h-92g77h201h24",
          userId: "86dhcgdg-f347-6fd2-d4f9-8df985703008",
          ideaId: "b5fcc86f-2g84-56f6-c951-d17cf33gd52f",
          amount: 25.99,
          status: "Completed",
          transactionId: "033340rztvldcbsv",
          gatewayResponse: null,
          createdAt: "2025-04-18T09:15:42.789Z",
        },
      ],
      comments: [],
      ideas: [
        {
          id: "d7hee08h-4i06-78h8-e173-f39eh55if74h",
          title: "Rainwater Harvesting System",
          problemStatement: "Water waste and high water bills during dry seasons.",
          solution: "Install rainwater collection systems on community buildings.",
          description:
            "This project will capture rainwater from roofs and store it for irrigation and non-potable uses, reducing water consumption and costs.",
          images: [],
          isPaid: true,
          price: 18.75,
          status: "APPROVED",
          feedback: "Successfully implemented. Consider expanding to residential buildings next.",
          categoryId: "2d239g6e-0ef7-60de-d617-g4d5h4g7efg4",
          authorId: "86dhcgdg-f347-6fd2-d4f9-8df985703008",
          isDeleted: false,
          createdAt: "2025-02-05T08:15:30.789Z",
          updatedAt: "2025-05-01T10:35:27.654Z",
        },
      ],
    },
    {
      id: "97eiddeh-g458-7ge3-e5g0-9eg096814119",
      name: "Emily Parker",
      email: "emily.parker@example.com",
      password: "$2b$12$yet_another_hashed_pwd",
      passwordChangedAt: null,
      image: "https://randomuser.me/api/portraits/women/24.jpg",
      role: "MEMBER",
      isActive: false,
      createdAt: "2025-01-18T11:30:00.000Z",
      updatedAt: "2025-04-30T15:45:22.123Z",
      votes: [],
      payments: [],
      comments: [],
      ideas: [
        {
          id: "e8iff19i-5j17-89i9-f284-g40fi66jg85i",
          title: "Community Energy Audit Program",
          problemStatement: "Inefficient energy use in homes leading to high bills and emissions.",
          solution: "Conduct free energy audits for neighborhood residents.",
          description:
            "This project will train volunteers to perform basic energy audits and provide recommendations for improving energy efficiency in homes.",
          images: [],
          isPaid: false,
          price: 0,
          status: "REJECTED",
          feedback: "Need more detailed implementation plan and budget breakdown.",
          categoryId: "3e340h7f-1fg8-71ef-e728-h5e6i5h8fgh5",
          authorId: "97eiddeh-g458-7ge3-e5g0-9eg096814119",
          isDeleted: false,
          createdAt: "2025-04-28T13:50:45.321Z",
          updatedAt: "2025-05-01T09:25:18.987Z",
        },
      ],
    },
  ]