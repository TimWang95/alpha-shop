function Cities() {
  const cities = [
    { text: "請選擇縣市", value: "" },
    { text: "基隆市", value: "KLU" },
    { text: "新北市", value: "TPH" },
    { text: "臺北市", value: "TPE" },
    { text: "桃園市", value: "TYC" },
    { text: "新竹縣", value: "HSH" },
    { text: "新竹市", value: "HSC" },
    { text: "苗栗市", value: "MAC" },
    { text: "苗栗縣", value: "MAL" },
    { text: "臺中市", value: "TXG" },
    { text: "彰化縣", value: "CWH" },
    { text: "彰化市", value: "CWS" },
    { text: "南投市", value: "NTC" },
    { text: "南投縣", value: "NTO" },
    { text: "雲林縣", value: "YLH" },
    { text: "嘉義縣", value: "CHY" },
    { text: "嘉義市", value: "CYI" },
    { text: "臺南市", value: "TNN" },
    { text: "高雄市", value: "KHH" },
    { text: "屏東縣", value: "IUH" },
    { text: "屏東市", value: "PTS" },
    { text: "宜蘭縣", value: "ILN" },
    { text: "宜蘭市", value: "ILC" },
    { text: "花蓮縣", value: "HWA" },
    { text: "花蓮市", value: "HWC" },
    { text: "臺東市", value: "TTC" },
    { text: "臺東縣", value: "TTT" },
    { text: "澎湖縣", value: "PEH" },
    { text: "金門縣", value: "KMN" },
    { text: "連江縣", value: "LNN" },
  ];

  return (
    <>
      {cities.map(city =>
        <option key={city.value} value={city.value}>{city.text}</option>
      )}
    </>
  )
}

export default function Step1() {
  return (
    <>
      <form className="col col-12" data-phase="address">
        <h3 className="form-title">寄送地址</h3>
        <section className="form-body col col-12">
          <div className="col col-12">
            <div className="input-group input-w-lg-2 input-w-sm-s1">
              <div className="input-label">稱謂</div>
              <div className="select-container">
                <select>
                  <option value="mr" selected>先生</option>
                  <option value="ms">女士</option>
                  <option value="mx">不明</option>
                </select>
              </div>
            </div>
            <div className="input-group input-w-lg-4 input-w-sm-s2">
              <div className="input-label">姓名</div>
              <input type="text" placeholder="請輸入姓名" />
            </div>
          </div>

          <div className="col col-12">
            <div className="input-group input-w-lg-3 input-w-sm-full">
              <div className="input-label">電話</div>
              <input type="tel" placeholder="請輸入行動電話" />
            </div>
            <div className="input-group input-w-lg-3 input-w-sm-full">
              <div className="input-label">Email</div>
              <input type="email" placeholder="請輸入電子郵件" />
            </div>
          </div>
          
          <div className="col col-12">
            <div className="input-group input-w-lg-2 input-w-sm-full">
              <div className="input-label">縣市</div>
              <div className="select-container">
                <select required> 
                  <Cities />
                </select>
              </div>
            </div>
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <div className="input-label">地址</div>
              <input type="text" placeholder="請輸入地址" />
            </div>
          </div>
        </section>
      </form>
    </>
  )
}