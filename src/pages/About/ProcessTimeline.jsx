import { Circle } from "lucide-react"

export default function ProcessTimeline() {
  const steps = [
    {
      title: "Leave a request on the website",
      description: "We'll acknowledge receipt and contact you promptly to discuss your needs.",
    },
    {
      title: "Calculation of the cost of the service",
      description: "We provide transparent pricing based on your specific requirements.",
    },
    {
      title: "Signing of a contract",
      description: "Clear terms and conditions to ensure mutual understanding.",
    },
    {
      title: "Execution of works",
      description: "Efficient delivery with regular updates throughout the process.",
    },
  ]

  return (
    <div className=" bg-gradient-to-r from-gradColLeft to-gradColRight text-white py-16 px-4 md:px-8">
      <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl  mx-auto">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-wider text-secondary">BETTER PROCESS</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            The Process of <br /> Working <span className="text-primary">with Us</span>
          </h2>
          <div className="w-[1000px] left-2 hidden lg:block  relative overflow-hidden    top-[3.4rem] h-px bg-secondary z-20"> </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
       
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Timeline connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-4 left-[calc(100%_-_8px)] w-full h-0.5 bg-secondary -z-10"></div>
              )}

              {/* Step indicator */}
              <div className="flex items-center  mb-4">
              
                <Circle className="h-4 w-4 text-secondary fill-secondary" />
                {/* <span className="ml-2 text-lg font-medium text-secondary">{index + 1}</span> */}
              </div>

              {/* Step content */}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        
        </div>
      </div>
    </div>
  )
}

