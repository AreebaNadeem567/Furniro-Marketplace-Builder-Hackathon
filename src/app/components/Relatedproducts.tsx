import Image from 'next/image';

const images = [
  '/images/artwall.png',  
  '/images/dining.png',
  '/images/table1.png',
  '/images/leviosa.png',
];

export default function ImageGrid() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Related Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300">
            <Image 
              src={src} 
              alt={`Image ${index + 1}`} 
              layout="fill" 
              objectFit="cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
