import PageWrapper from "@/components/PageWrapper";
import SkeletonCard from "@/components/SkeletonCard";
import ArticleList from "@/components/articles/ArticleList";
import Hero from "@/components/hero/Hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="mb-10">
      <PageWrapper>
        <Hero />
        <section>
          <h4 className="text-center text-2xl font-bold mt-5">Latest Articles</h4>
          <Suspense fallback={<SkeletonCard />}>
            <ArticleList limit={4} />
          </Suspense>
        </section>
      </PageWrapper>
    </main>
  );
}
