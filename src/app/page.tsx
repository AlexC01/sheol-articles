import ArticleList from "@/components/articles/ArticleList";
import ArticleCard from "@/components/cards/ArticleCard";
import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mb-10">
      <Hero />
      <section>
        <h4 className="text-center text-2xl font-bold mt-5">Latest Articles</h4>
        <ArticleList />
      </section>
    </main>
  );
}
