import { useState } from 'react';
import faqImage from '../../../assets/faq-image/faq-01.jpg'; // Adjust path as per your project setup
import { IoMdArrowDown } from 'react-icons/io';

const FAQSection = () => {
  // Example FAQ data
  const faqData = [
    {
      question: 'What services do you offer for building construction?',
      answer:
        'We offer comprehensive building construction services, including planning, design, and construction management. Our expertise ensures high-quality results tailored to meet client specifications.',
    },
    {
      question: 'What types of materials do you supply?',
      answer:
        'We supply a variety of construction materials such as bricks, sands, stone, and aggregates. Our materials are sourced from trusted suppliers to ensure durability and reliability.',
    },
    {
      question: 'How do you ensure quality in material supply?',
      answer: 'We ensure quality in material supply by conducting rigorous testing and partnering with reputable suppliers. Our commitment to quality ensures that only the best materials are delivered to our clients.',
    },
    {
        question: 'What road construction services do you provide?',
        answer:
          'Our road construction services include road design, paving, and maintenance. We use advanced techniques and materials to create durable and safe roads that meet regulatory standards.',
      },
  ];

  // State for tracking open FAQ items
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle click on FAQ item
  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white my-20">
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-8">
        <div className="flex gap-10 justify-between items-start lg:items-center flex-col-reverse lg:flex-row">
          {/* Image Section */}
          <div className="flex-1">
            <div>
              <img
                className="w-[550px] lg:w-full h-[450px] object-cover rounded-xl"
                src={faqImage}
                loading="lazy"
                alt="Faq Image"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1">
            <div className="space-y-6">
              <h2 className="text-[36px] lg:text-[48px] font-[titillium] font-[700] text-[#0E121D] mb-6">
                Frequently Asked Questions
              </h2>

              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => handleItemClick(index)}
                  >
                    <h3 className="text-xl font-[archivo] font-semibold text-[#0E121D]">
                      {faq.question}
                    </h3>
                    <IoMdArrowDown className={`ml-3 h-5 w-5 ${
                        openIndex === index ? 'transform rotate-90' : ''
                      }`} />
                  </div>
                  {openIndex === index && (
                    <p className="mt-2 text-base text-gray-700">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
