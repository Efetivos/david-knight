import HeroHome from "./HeroHome.astro";
import TitleAndParagraph from "./TitleAndParagraph.astro";
import CoverArticle from "./CoverArticle.astro";
import ImageText from "./ImageText.astro";
import TwoImages from "./TwoImages.astro";
import FullImage from "./FullImage.astro";
import Embed from "./Embed.astro";
import List from "./List.astro";

export const components: Record<string, any> = {
    hero_home: HeroHome,
    title_and_paragraph: TitleAndParagraph,
    article_cover: CoverArticle,
    image_text: ImageText,
    two_images: TwoImages,
    full_image: FullImage,
    embed: Embed,
    list: List
};
