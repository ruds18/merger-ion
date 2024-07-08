function Table() {
  return (
    <div className="absolute left-40 p-4">
        <div className="rounded-lg">
            <table>
                <tr className="bg-lightGrey text-white text-[10px]">
                    <th className="hover:bg-whiteGrey p-2">
                        <button>
                            Company Name
                        </button>
                    </th>
                    <th className="hover:bg-whiteGrey p-2">
                        <button>Likely To Buy(LTB)</button>
                    </th>
                </tr>

                <tr className="bg-blue text-white text-[10px]">
                    <th className="hover:bg-whiteGrey p-2 font-medium">
                        <button className="underline">
                            Company Name
                        </button>
                    </th>
                    <th className="hover:bg-whiteGrey p-2">
                        82
                    </th>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Table