export const api = {
  accounts: {
    async someCoolAccountsFn(someParam: string, anotherParam: number) {
      console.info("Some super secret something....");
    },
    async anotherCoolAccountsFn(someObjParam: { blah: string; bar: number }) {
      console.info("Another super secret something....");

      return { waddup: "dawg" as const };
    },
  },

  posts: {
    async someCoolPostsFn() {
      console.info("Some super secret something....");
    },
    async anotherCoolPostsFn() {
      console.info("Another super secret something....");
    },
  },
};

export type apiType = typeof api;

type ReturnType = {
  miscData: {
    blah: true;
  };
  documentData: {
    accounts: [{ id: "asdf" }];
  };
  queryData: {
    accounts: [{ id: "asdf" }];
  };
  invalidatedQueries: {
    accounts: true;
  };
  invalidatedDocs: {
    accounts: ["asdf"];
  };
};
