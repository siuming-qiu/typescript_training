type ParseParam<Str> = Str extends `${infer key}=${infer value}`
  ? { [K in key]: value }
  : {};
type MergeValue<One, Other> = One extends Other
  ? One
  : Other extends unknown[]
  ? [One, ...Other]
  : [One, Other];
type MergeParmas<
  OneParam extends Record<string, any>,
  OtherParam extends Record<string, any>
> = {
  [Key in keyof OneParam | keyof OtherParam]: Key extends keyof OneParam
    ? Key extends keyof OtherParam
      ? MergeValue<OneParam[Key], OtherParam[Key]>
      : OneParam[Key]
    : Key extends keyof OtherParam
    ? OtherParam[Key]
    : never;
};
type QueryString<Str> = Str extends `${infer First}&${infer Rest}`
  ? MergeParmas<ParseParam<First>, QueryString<Rest>>
  : ParseParam<Str>;
type quertstring_test = QueryString<'a=1&b=2&c=3&a=4&d=5'>
