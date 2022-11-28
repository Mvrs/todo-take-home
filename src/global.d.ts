type ReturnTypes<U> = U extends () => any ? ReturnType<U> : never;

type Item = {
  id: string;
  name: string;
  completed: boolean;
};
