export const api = {
  initialize() {
    console.log("Initialize some stuff yo");
  },

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
    async someCoolPostsFn(badParam: () => void) {
      console.info("Some super secret something....");
    },
    async anotherCoolPostsFn() {
      console.info("Another super secret something....");
    },
  },
};

export type apiType = typeof api;
