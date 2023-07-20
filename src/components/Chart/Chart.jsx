

const Chart = () => {
    return (
        <div className="ms-16 mb-20">
            <h1 className="text-blue-700 text-sm font-bold">Retirement Income</h1>
            <p className="text-xl font-bold">Starting Year 2056</p>
            <div className="flex flex-row gap-5">
            <div className="mt-2">
              <h3 className="text-2xl font-bold">$300,000</h3>
              <p className="text-xs text-gray-400">My Goal</p>
            </div>
            <div className="mt-2">
              <h3 className="text-2xl font-bold">50%</h3>
              <p className="text-xs text-gray-400">
                Goal Achieved
              </p>
            </div>
            <div className="mt-2">
              <h3 className="text-2xl font-bold">$300</h3>
              <p className="text-xs text-gray-400">Est.Monthly Income </p>
            </div>
            </div>
        </div>
    );
};

export default Chart;