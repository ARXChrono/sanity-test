export default {
  name: "pet",
  type: "document",
  title: "Pet",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "body",
      type: "array",
      title: "Body",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "video",
      type: "mux.video",
      title: "Video file",
    },
  ],
};
