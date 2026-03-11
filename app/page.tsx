import { Suspense } from "react";
import FeaturedProducts from "@/components/lading-page/featured-products";
import HeroSection from "@/components/lading-page/hero-section";
import RecentlyLaunchedProducts from "@/components/lading-page/recently-launched-products";
import ProductSkeleton from "@/components/products/product-skeleton";

export default function Home() {
  return (
    <div>
     <HeroSection />
     <FeaturedProducts />
     <Suspense fallback={<ProductSkeleton/>}>
        <RecentlyLaunchedProducts />
     </Suspense>
    </div>
  );
}
