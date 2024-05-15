import React from "react";
import amazonlogo from "../../../src/assets/amazonlogo.png";
import dropboxlogo from "../../../src/assets/dropboxlogo.png";
import ebaylogo from "../../../src/assets/ebaylogo.jpg";
import ibmlogo from "../../../src/assets/ibmlogo.png";
import metalogo from "../../../src/assets/metalogo.jpg";
import microsoftlogo from "../../../src/assets/microsoftlogo.jpg";

function TopCompany() {
const details = [
    {
        title: "Data Scientist",
        description:"Google, the tech giant, fosters innovation, empowers employees, values diversity, and shapes the future with groundbreaking technology and global impact.",
        company:"Google",
        location:"India",
        src:"data:image/jpeg;base64,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"
    },
    {
        title: "Devloper",
        description:"Meta, the tech giant, fosters innovation, empowers employees, values diversity, and shapes the future with groundbreaking technology and global impact.",
        company:"meta",
        location:"India",
        src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAeFBMVEX///8AfvcAfPcAevcAePcAdfcAcfYAbPYAc/cAb/YAdvbO3/34+//7/f8Aafbu9P7z9/7X5v0fgvfT4v3k7f7G2/271Pxxo/m40Pypx/uPtfo3ifdxpvlEkPjp8P5nn/lgmfgAZPabv/uSuvp+rflYlPhRjvinwvs0LqhkAAAIA0lEQVR4nO2baXuCOBCASyJyCKJ4cSmUy///D1fbWmYCJNgSu/vsvB9bIplkMleGtzeCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIP7P+NsoOeX5KauraP/USM/zfE2T+hmHLDQM9k1Y76aNOybnNLyRFvHEEdq5cpszA8CYY8TKYbt8aS++xOeLJa+3L5irHD+2HGMAZxF5smGrs+XiEe66XcmGaMdbnQdFuW+P1axGD8M2c3h/CF/n2787P0HJ3f6cvpeaXS+Dw7wotIeHmPbIEP3sa5cNT+qha6ehc71PnPFhVv43pmBXmFJRbtjtYWDYmGZ+7md6/ANZVq1SltvUwkgYdlAN470hL5AllBwXODVspI/pQjWEhfGLzcCeKyf1PTUw7JBiK8Zd23ZFw8bYa/fGCwdM64g0Rjc1LAuz3pukrLL03cIWgbmrF8rin/uyfDnzAWn4QxqkmsxOv63DIbVxDGG/MBzIerJwI0ybormFWn15ePg5623TnX3GsdU6nFFIxMOX+ZvYYOJ0m+rTeQfHumWiqGZ7X+hL3tlkxuoN/k2vRJq7PL1Ilm0rHP5FE4Op7atUdPB2cXnzawsIf+2HYUd0oNavMQKbWjDKCzHgXZ2WgjRO/RZ3srAwGjK+K3QS+XN50Q+JcMBv2OVGfCSoTEER7aSbKLRviB3cm0WuW5Ab+wZvzHpAY26ZgSCxAfy+PZrsrJAR0K9oXokPxDoZdtc9ab6xynEHH3W6aPAm0CXEgws2vU7W07Ev4pFwZ1nIfv4ElopV808f4SdoY3g6vnrVYNLCQ/kL0NZotgHBO5raQuap64HwjZkK3Vmtwa9r3poMBfBmKcvag7wvja061f6pe4NbaN2ajQVntlC8bJuKRsAVHf/AILACXF3k+QX4HCiN51EIbNhZvdSbunuHe9IYovnI3ronpe2scIrMp+gNcjb9tHs2IrgxbEp+K9QJ5IfskwBsjV3pK6U1yEPnSv2/xQshTlT4hEQl6jwUn6CXP2SPVjm8Thkj2AC3UC/1vuhsgKUt5yzRxrQTNuYt7sXPE3Sz7AbZyZS3/IQWZfDJhBHB2hBZq2d37HST6Uo5sdsIp6TpPUdzd07KURfgbd81VQPKEG7MecKIaijYtNTmNumEsSs9RbQTjE4WE5zzbqhYc0OpaFGnZ/ysRZhLA4Vx1KofFMPFNa48bfumG+loyWqO8ACwVPm8X42kZyxUVfr9vBNGj3FGhtkulc+LpViwNZnK2STgTVrygASe5nelZ4YmycA3MupAKOpsDZ9iaZ7lkkNhLNXj/hVEZcsjjmrcXOE9oBcw55IA/j44lLfwV/X4DuzLsvZinEObClvoAf+81hBrosVdqo7M5dzt48eBP6Osk6cKG1B0L1trcJsxVBSV4/NLkJKa99rSHuWohpPI17vu3jYlmnuWEmYmlsL470B8yYuPpa1xZsPlywGWzpwSBD6HhzLmUO4yN+Cyj311awTYBpjybOgIxJ6/ThvAleWNXEkSkC3z09esI5xCy7Vn20muwTbvoWU2a2nAtINlyfChT5scKRoPZaoagDq7Oth4FmSZl9JQ1od5D6+//37AEYFdS37DgwWn2YR4sIORmSO93AYB/G1juvXfJDjttGTmGQjuzibEgxUURmqZD/CkI++4wtEak5WdwZP2TCKAicApyiLZTbEYne8VxwGyaBU+NpMIHYepwqB4dI3jUVh3uSO56gOvs2ePZ5AwzniEgaIeMxP+G2Nnw/PRs/dvEGYPS5iMi47RO+FTM97++EJhxuyQV0Ff4vSnehC2ZvQ+6XXCjBlV/whLGIMRSy10Ao0FnKASZM9e0phkAC4o0B+MJQNYr+paUXqAt2kwzcjPjMRV6F5tOVxZFUI0Nx9WNLCB86eayKqOhDPoVn3RjFiJMy7amNeh39pAZzWjGJ9cYAmQD9byd6iwPFol3L8jYYYveffdzvD5A81NAlVoMaBB+L5TElgngqINNS9E4F2is5oBlGmu+y2uPgq8eDseRXrYPBvWQJMHSJsnlOieJoLv54347w2+J2eym6iD0EDbXxqYRUwotD/NCh3ctWCcA9zBwE8yR+cJ9QDDES0aDIomXOg8zeUEI0iWojLeJUP30ExxebM947sOt8XSbGDUs5hfFiEcxv5he8I9TI6ia9yPhMZIwdvAeNTV0uB4xNdgbvGYcVC2OEZxZAnxB16vm7AAe4lK7mstrQBegSfAw7w6rg5x1ho4S3FTtZaLLXgGPz9aHf0YtZ6aem5oS/z6W4TPwjA0uHhzsZxydx8J9tlg7Hxbm9WxOqP7NjPTcw3otWMXLoiJelH3fozxheu6Qgehrgvat+sUYZZTS8Mjl4QYt9DW29go388Wk7tdLqM3a3Bp9HUCbUe7SB+y8Hr6Su56rek9zExj02k88rHY975kzzRURD3bIaC8xvkdldgLg3Cz55qQYkMqDWNDPdMzUtrjmrZMnm10iUPZN0UTmiB/hx+PfdPEnfjpd/uR5GuvCZ2Gv8U/tIOf81nhT74Y9VftmOKO93/PyeZqi+Iwxyl/uIyXwa9pDfYu6bKfFS82LN59Zs4d1v9SYzq7dCl22TIrfeWntEF8Sm+B2f0L+KL6bchxON+XhH+sD7/7suKVX9B94m+CIJjHeF7irGnbNk3Ttsniv/rAeUY2l/12t9VuwQiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAjiv88/fd5qBgzzsSMAAAAASUVORK5CYII="
    },
    {
        title: "DevOps",
        description:"Amazon, the tech giant, fosters innovation, empowers employees, values diversity, and shapes the future with groundbreaking technology and global impact.",
        company:"amazan",
        location:"India",
        src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAxlBMVEX///8CAgIAAAD4mRv///3///v8///Z2dn4+Pj//f/7+/vr6+vS0tI1NTXw8PD09PQpKSlycnLl5eW8vLyIiIj6lhJgYGCzs7NBQUF/f3+mpqYTExOdnZ3///bzsVtKSkofHx/GxsZpaWmUlJTtkABWVlbtsmf88+n9+uf56M3+/+byjADnkgDptWnw2bLv0KPxyZnyw4zrpEb2ojbrvHr69djmlCPryY7jmTPkqEjpr1v53Kz3nCr548DqqFv469nx15747cnCuspYAAALDUlEQVR4nO2cCXuiOhSGaQRFoW5IUStaFac4Wq1I1Vod6///U/eExbqQiGvoffjufWacViFvTs6SBTkuVqxYsWLFihUrVqxYsWLFihUrVqxYsWI5ymQy4o8yGdbtOVNiVkoptUqn/Ix85RuttiZLWZF1206SCBylxgbiwZX/z3JJSUm/xEZiUa52tiH25PzqqSpLrBt6XNlm7YkMsgX0XNBSrBtLV1YpPR4l2fB0qlHGUSov4Ug2OLUc6zYTJJfyJ6B4OIUm62YHKVNtnIji4pRrrFt+qGLl+QwWTPNciVreST2dheLiVKLlOPLj2SwOTZY1wJbkUz1/n6YUnZEmv1yC4tBUWTP4Sj1eyAI0+YhEaKl1MQvQtIqsORy1r8ACNFoU6mj5It//gWlEoIrOlK/CAjQKaxSOq16J5QF1mKfObJ4Kg7Z0DAYxnw+UaI3EU+RKtSnLcrNaOlojINYVp0hJMYBS2qxeZHJFpUPHQQ3G8az6TGwfTFWk3SIlp1HHJEJpRhSeyJ2NkHb4drlBpZHvD7AlciFDcGeZFsgZF2g1UoWJSL1cpdSkqHDf1u+pRRhlCNVIzkz6CP5U566N35PUIRmmQ6xNFHIQQM/3bPy+mgQPQJTSJEf2GoTu2PYDkRwANSj1PG2c3a/ph6oRsgxqU8os0ofw51hWZxBoAxsWlGI2UsjxDDGdBSjloCoS5WnZj7JggJjONjPFptautLb2k3BDUYk2XIqUcMa6bs7kclmpWEw1tVrlqfHi7L1Q20SDYVvPbCsjigBWlGW6G1NmQBGCCan/FczvGGYhFcNEVdL/A0bMQgiXNUrSZJ1nQkiUIA0pWrVWKjw1aJsf0YaRAAIztDr5hxDrZ5GFycpaGyxRzoddBIwqTLZZq7Qa+dAQ0YWRtM1JpvAY0YRRWt7AOhUkejC1/Mu5IBGDyVSfLyGJFIz2fBlJhGAuOKERNRhRu+xUQ5RgJOqW0++CSRWuwxIFGHCX0K2lpyD2MCnS6vkhhUNCOZbGHCZ7lMU9y9yqtKuapihKM8LrZkcOzjggbU1OFaWct2VD3tNlDXMkjiH0WJOLuwtpkYVpUk+aAYomHRyLiyqMSNvahwFWCzrgF1WYNnmvBVjywYv6EYVJUbb1EWoQPhVRGJr3E1kiClOkpBj0SDzdG00Y2sGZB/LiZCRhsgWKYchH4jORrABIpwBwq57JzRIjCVOlVIwF8nn4XBRhciXKKKMcHqXtAjCDoUxj0AulVbStc2YwTUpU6lA29GmHGpjBKBSXqVCOWlBKIHabTZQDzdSzM7SDQKxgxBoFJrBa9kSr51gdOs/SghkFhvZ8CrOTzVLlPBjKCS12hzQlWjFDhknT1qVQ/p4EWypSVjJQiVgAUAI6ngMxOnBWpFnmiZRnMkeeHWB0spnqM3lS9qMUpw4Mo8PAVBhSjBWPrUy9sMk0tND8QHqKlHKo2esFNvFMpD03hx4Cx9nxZWlWjzhSn89ChYDgXKRUMhvTtJg8S6vR49LhaeBsmG0c9MykCqBmjIBHTnLhdj1RmcVAO+IA+7Zpht2LRi0GmTNLic0uzVNRdHcxMqIc/lscEGrfH4arHWmf830fipySteNPAu58Ls9gJkB3Gg8n/PmsrY8xeGibVjdfJNrjNzdT7eFWNNX7P7FJf1CR2lr6b5lMn889mEH3IURd3LmZUuc9Po9eFNpCwEubzRSNtg1I6fkUZdENPWqMvulEPOMbjZxCh7hQjR5lZo9rp042jbcOHTxCEXpk+aQWZV8j2CxlzyGCBhp5U/dOap/2hWYFf+FWPKyGIIwxRQG1Q6dOBJOVH+eWKns0jKYyu6qGO9IIb2rsJMPdY52ISX15KCVMTAPfLu05t7x1WAWc6XBhhuf5OyFsqVg5VuMj9FJQDmJuc0Oz+zykC8HzgvfC//8+EpXCC7lGwd8zWdGCFp9828Dvt6zGc4KQ3LIL/CXwyTtaSVJK5aB5izOZaZQCUUAyXrABd9mpYFxzCD+NBxD+vkMuJ2uVMjpQHn/dLHkjrVjBRwW1nTdgjjSfTLqvBcH5oXBv95FSTa1deGo85vP5x3KnUKlVlf1zgAefaVa11G41BkYAEt7sDobvI9D7cNA1hes0Eds36fwZonMyOalYLKZSKfhTyoph6qzt9/gOr3ff7bo1XiwSoMVibNXt7lVwwNC8kBawxW9uatczzMGf8SKhwn++VDVhDcB3khffYfD59gFjlvc67qZKCpw+qC8SAZrC+LgcZmqok6nuBpUrtJcm8BbTNlTXGJ58GFu4RrYx/yTU3mxoXt4tR8Vz+rRnGP3JZPY5/wP6Z00M1YcBmst7EzoL43yZtx9lPN8dDZcfpql7/q7/HcxdmJHz+4tvwAnTBbijWh+8erfAqYC/SkftSfDND3dNc66PdGdOTHvnuCv4DA93+J6BsdXE/Gul48GQxGWTcCsfwt3kRU54mdTr2IXGg+t0HeQwYVnHQ1c16tOuvnXXa1z+4HZw2STuQR3/BTD/HJjuVWAcA/BdO+HiWKOlybkgt4Fxaxd9NZguX5M4vuF+VOvmNa4MfZTEjme+W24CM8ZvQ8c8gnCz74ozu+/zhDEZ4t76wEM8YV/lut7kIsnrMNTcMGks6mCem8U2fTV8sxIG9Jutw9gaLODlYnC96ztEwmo08YK+mhgDzyvnhJ2kk814932nRAX/I85lvJTIrwa2hZsPN7GWOIBN8evZx/VgPOlLq/dTLs3mo67pNgos51S7pyVpfiNc+eEffAzs+tgryoBFB+/R39yUef2czZtT46f+g/Fm2QPPM9Np3yihbYODFZ9Mc04nwLVhdC388lI1bBN8VeC62FWN9dVRnLnS2trGgdE8mTvhGt/ZLaxPGGnO6MV/692RNfEv2QeWyVJw0/IQEnbP0q/voWlnsvE96W3TQHFgzN6+138doFOKa3A3mIYJ5nr6B0ow1QeBS/btvzxeC+CSJh5lxpK7TUqD7vprT4zd+hyqW8Oo219rM/ysB3uauR7aVr/XU3evNl97d+JhlEFnWXw6fYs61w1Xa3u2O9h8oollT5frD1PXBX/6vi/8C/3VXA+Gdh0bZP86i/qXzjnLM5h3uOgn+msuzeuBF7tYuJd0wEkc4DhEhgFIb/b0+2uw7q5Wq9eN4B/d7nrwNbXfPmd9o3cIglGGJp6muz0H8w8wzIi7RVHr3gFXMYDTta1AHNdGPZiX4JnJbGZ91l1Z1mzSN/qG0QvEcIqLP4DiVGbeqBqM1cTnaxK7421g/CkfRKD6wgho1B6XejBrDH5jYuzG+S0b6CNDtbrY+2+0AIETJDY7XmmEwmN86DxnSIUSaYorWGdusTHDyuo5ZQB/8bTsCJD7whyM/vUv5AE/s2xnqsTtLV4uJ9bSGdT3mLPjAaevliOops7lUXuQpYZ4mU/wVs229LrsCldYYApPg++5Wk7rODydStJT+2CTrulUEEGRHNvpRrMmAg6eR+uv6y973MOBKqRFwCT9+fdyhdcucE4hNPpedsHC9ZhTMTtA3S9I6MYxIhy3wSIwtnTBJXHqOu5wrgcxmr/bmrm7++B3LV6R5AVz+WXPvZx4qF6vP/m0v5cfuj/rS7udIRBmD/z9fGb7tT9McCmimx/LIWT6+edsNsGC5DmHsgAviumCN3h4f4+MdgcWe4EUCQKxTvs1SqfTbnjwZ5M3qkjuoiRe1fEGSTrtoiV/K5DvEG594u2wRswDQstf3NhatfitKJtYtfeTX4sTK1asWLFixYoVK1asWLFi/W79B6nM5gYe2jgrAAAAAElFTkSuQmCC"
    },
]

  return (
    <div className="mt-12">
      <h1 className="text-2xl text-center font-semibold text-gray-500">
        Trustded by job holders
      </h1>
      <div className="flex gap-10 items-center justify-center flex-wrap mt-6">
        <img className="w-32" src={microsoftlogo} />
        <img className="w-32" src={ibmlogo} />
        <img className="w-32" src={amazonlogo} />
        <img className="w-32" src={ebaylogo} />
        <img className="w-32" src={dropboxlogo} />
        <img className="w-32" src={metalogo} />
      </div>
      <div className="flex mt-6 gap-10  justify-center flex-wrap">
      {details.map((card)=>(
        <figure key={card.src} className="w-64 shadow-2xl bg-slate-400 rounded-xl  p-8">
        <img
          className="w-12 h-12 rounded-full "
          src={card.src}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-sm font-medium ">
              {card.description}
            </p>
          </blockquote>
          <figcaption>
            <div>{card.title}</div>
            <div>{card.company}</div>
            <div>{card.location}</div>
          </figcaption>
        </div>
      </figure>
      ))}
      </div>
    </div>
  );
}

export default TopCompany;
