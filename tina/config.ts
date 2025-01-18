import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.HEAD || "main",
  clientId: process.env.TINA_CLIENT_ID || "", // Replace with your TinaCMS client ID
  token: process.env.TINA_TOKEN || "", // Replace with your TinaCMS token
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "posts",
        label: "Blog Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "artworks",
        label: "Art Portfolio",
        path: "content/artworks",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Artwork Image",
            required: true,
          },
          {
            type: "string",
            name: "medium",
            label: "Medium",
          },
          {
            type: "string",
            name: "dimensions",
            label: "Dimensions",
          },
          {
            type: "datetime",
            name: "createdDate",
            label: "Date Created",
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
          },
        ],
      },
      {
        name: "photographs",
        label: "Photography Gallery",
        path: "content/photographs",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "photo",
            label: "Photograph",
            required: true,
          },
          {
            type: "string",
            name: "camera",
            label: "Camera Used",
          },
          {
            type: "string",
            name: "lens",
            label: "Lens",
          },
          {
            type: "datetime",
            name: "takenDate",
            label: "Date Taken",
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
          },
        ],
      },
    ],
  },
});
