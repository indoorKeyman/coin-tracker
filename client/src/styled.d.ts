import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    cardColor: string;
    coinName: string;
    boxShadow: string;
  }
}
