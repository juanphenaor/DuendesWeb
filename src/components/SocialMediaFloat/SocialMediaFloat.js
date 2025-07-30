import React from 'react';

const SocialMediaFloat = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/duendesrugby',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      bgColor: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/duendesrugby',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.8L4.27 17.94l-1.02-.612 1.162-2.753c-.076-.365-.076-.741 0-1.106L3.25 10.716l1.02-.612 1.163 2.753c.568-1.07 1.719-1.8 3.016-1.8.568 0 1.106.144 1.574.397l2.188-2.188.707.707-2.188 2.188c.253.468.397 1.006.397 1.574 0 1.297-.73 2.448-1.8 3.016l2.753 1.163-.612 1.02-2.753-1.162c-.365.076-.741.076-1.106 0l-2.753 1.162-.612-1.02 2.753-1.163c-1.07-.568-1.8-1.719-1.8-3.016 0-.568.144-1.106.397-1.574L6.982 8.682l-.707-.707 2.188-2.188c-.468-.253-1.006-.397-1.574-.397z"/>
        </svg>
      ),
      bgColor: 'bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/duendesrugby',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      bgColor: 'bg-sky-500 hover:bg-sky-600',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/duendesrugby',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      bgColor: 'bg-red-600 hover:bg-red-700',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.bgColor} text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl`}
          aria-label={`Síguenos en ${link.name}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaFloat;
