import { FooterData } from '@/data';
import React from 'react';
import { AnimatedLink } from './animated-link';
import { getCurrentYear } from '@/lib/helper';

const Footer = () => {
  return (
    <main>
      <hr />
      <footer className='grid md:grid-cols-3 grid-cols-2 gap-6 md:gap-96 items-center md:px-8 px-3 md:pt-8 '>
        {FooterData.map((footer) => (
          <section key={footer.id} className='py-5'>
            <div className="flex flex-col">
              <h3 className='text-white font-bold mb-2'>{footer.title}</h3>
              <ul className='text-sm'>
                {Object.keys(footer).map((key) => {
                  if (key !== 'id' && key !== 'title') {
                    const uri = footer[key + 'Uri'];
                    const value = footer[key];

                    if (typeof uri === 'string') {
                      if (key === 'email') {
                        // If the key is 'email', render a mailto: link
                        return (
                          <li key={key} className='py-2 pr-4'>
                            <a href={`mailto:${uri}`} className='text-gray-400 hover:text-white'>{value}</a>
                          </li>
                        );
                      } else {
                        return (
                          <li key={key} className='py-2 pr-4'>
                            <AnimatedLink href={uri} className='text-gray-400'>{value}</AnimatedLink>
                          </li>
                        );
                      }
                    }
                  }
                  return null;
                })}
              </ul>
            </div>
          </section>
        ))}
      </footer>
      <p className='flex items-center justify-center text-gray-400 text-sm'>
        Copyright &copy; {getCurrentYear()} Nnamdi | Designed by <AnimatedLink href={"https://phantom-portfolio.webflow.io/webflow-home"}>
          Phantom</AnimatedLink>
      </p>
    </main>
  )
}

export default Footer;
