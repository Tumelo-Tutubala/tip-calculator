export function TipSelect({tipPercent , onChange, label}){
return(

    
     <label>
           {label}
            <select
              value={tipPercent}
              onChange ={(e) => onChange(e.target.value)}
            >
              <option value={5}>5%</option>
              <option value={10}>10%</option>
              <option value={15}>15%</option>
              <option value={20}>20%</option>
            </select>
          </label>

);
}