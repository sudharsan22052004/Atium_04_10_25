import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  tags?: string[];
}

const FeatureCard = ({ icon: Icon, title, description, features, tags }: FeatureCardProps) => {
  return (
    <div className="feature-card p-6 rounded-xl h-full flex flex-col">
      <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-semibold font-lato mb-3 text-white">{title}</h3>
      <p className="text-white/80 font-roboto text-sm mb-4 flex-grow">{description}</p>
      
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm font-roboto text-white/90 flex items-start">
              <span className="text-secondary mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-white/20 text-white font-roboto"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
