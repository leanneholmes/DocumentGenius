export default function Hero({ className = '' }: { className?: string }) {
  return (
    <div className="queryInfo rounded-lg text-jet">
      <div className={`flex flex-col ${className}`}>
        <p className="mb-5 ml-5 mr-5 mt-5 text-center leading-6 text-black-1000">
          Select a <b>Source Doc</b> and enter a query into the input field
          below for the information you are looking for.
        </p>
      </div>
    </div>
  );
}
