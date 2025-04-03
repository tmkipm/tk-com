'use client'; // Required for motion components

import Image from 'next/image'; // Assuming you might want images
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional image
  tags: string[];
  projectUrl?: string; // Optional link to project/detail
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  projectUrl,
}) => {
  const cardInnerContent = (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      {imageUrl && (
        <div className="relative h-48 w-full">
          {/* Use priority if image is above the fold or critical */}
          <Image src={imageUrl} alt={`${title} preview`} layout="fill" objectFit="cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
      )}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  // Wrap the entire card content (whether it's a link or div) in motion.div for hover effect
  const MotionWrapper = motion[projectUrl ? 'div' : 'div']; // Use motion.div as the base

  const cardContent = (
     <MotionWrapper
        className="block h-full" // Apply block and h-full for layout consistency
        whileHover={{ y: -5, scale: 1.03 }} // Lift and slightly scale on hover
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {cardInnerContent}
      </MotionWrapper>
  )

  // If projectUrl exists, wrap the motion element in a Link
  if (projectUrl) {
    return (
      <Link href={projectUrl} passHref legacyBehavior>
         {/* We use legacyBehavior + an inner `a` tag (implicit via motion.a or added manually if motion.div) 
             or rely on Next.js handling the motion component if it forwards refs correctly.
             Simplest for now is often just wrapping the motion.div. 
             If Link issues arise, consider motion.a or explicit `<a>` tag. */}
        {cardContent}
      </Link>
    );
  }

  // If no projectUrl, return the motion element directly
  return cardContent;
};

export default ProjectCard; 