import { useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { getProjectBySlug } from '@/data/projects';
import { SEOHead } from '@/components/SEOHead';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Lightbox } from '@/components/Lightbox';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const galleryLayout = project.galleryLayout || 'stacked';

  // ── IMAGE SIZE SYSTEM ─────────────────────────────
  const imageSizeClass = (size?: 'small' | 'medium' | 'large') => {
    switch (size) {
      case 'small':
        return 'max-w-md mx-auto';
      case 'large':
        return 'max-w-6xl mx-auto';
      case 'medium':
      default:
        return 'max-w-4xl mx-auto';
    }
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />

      <div className="min-h-screen">
        {/* HERO */}
        <motion.div
          className="relative w-full h-[60vh] md:h-[65vh] overflow-hidden bg-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </motion.div>

        {/* INFO */}
        <section className="max-w-3xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-light tracking-wide">
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-light">
                <span>{project.year}</span>
                <span>•</span>
                <span className="capitalize">{project.category}</span>
                {project.location && (
                  <>
                    <span>•</span>
                    <span>{project.location}</span>
                  </>
                )}
              </div>
            </div>

            <p className="text-lg md:text-xl font-light leading-relaxed">
              {project.description}
            </p>

            {/* SKILLS (NOW FIXED HERE) */}
            {project.skills?.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full border border-border bg-muted/40 text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </section>

        {/* GALLERY */}
        <section className="py-12 md:py-16">
          {galleryLayout === 'grid' ? (
            <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <ScrollReveal key={image.id} delay={index * 0.1}>
                  <div
                    className={cn(
                      'relative overflow-hidden rounded-xl cursor-pointer',
                      imageSizeClass(image.size)
                    )}
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="space-y-10 md:space-y-14">
              {project.images.map((image, index) => (
                <ScrollReveal key={image.id} delay={index * 0.1}>
                  <div
                    className={cn(
                      'px-6 lg:px-8 cursor-pointer',
                      imageSizeClass(image.size)
                    )}
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </section>

        {/* LIGHTBOX */}
        <Lightbox
          images={project.images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNavigate={setCurrentImageIndex}
        />
      </div>
    </>
  );
}
