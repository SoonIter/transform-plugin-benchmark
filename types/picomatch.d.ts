declare module "picomatch" {
    type Matcher = (value: string) => boolean;

    function picomatch(pattern: string): Matcher;

    export default picomatch;
}
