const SupportPage = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-text mb-6">Support</h1>
        <div className="space-y-6 text-primary-text">
          <h2 className="text-2xl font-bold text-primary-text pt-4">Demo Video</h2>
          <div className="max-w-sm mx-auto">
            <div className="aspect-w-9 aspect-h-16">
              <iframe
                src="https://www.youtube.com/embed/30quUq3K5AY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <p>
            Watch the demo video above, or{" "}
            <a
              href="https://youtu.be/30quUq3K5AY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              watch on YouTube
            </a>
            .
          </p>
          <h2 className="text-2xl font-bold text-primary-text pt-4">Contact Us</h2>
          <p>
            If you have any questions or need support, please feel free to contact us at:
          </p>
          <a href="mailto:teamajayji@gmail.com" className="text-accent hover:underline">
            teamajayji@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;