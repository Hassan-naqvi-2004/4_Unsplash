import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdQrScanner } from "react-icons/io";
import { TbBellRinging2Filled } from "react-icons/tb";
import { FaBars } from "react-icons/fa6";

function App() {
  const api =
    "https://api.unsplash.com/photos/?client_id=1q5V7tlq1zA3R5mlnuxzZpyEDsLVCbTpsW4kLzPmgWs";
  const [splash, setSplash] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function unsplash() {
      const name = await fetch(api);
      const num = await name.json();
      console.log(num);
      setSplash(num);
    }
    unsplash();
  }, []);

  const mySearch = async () => {
    const api2 = `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=1q5V7tlq1zA3R5mlnuxzZpyEDsLVCbTpsW4kLzPmgWs`;
    const name = await fetch(api2);
    const num = await name.json();
    console.log(num);
    setSplash(num.results);
  };

  return (
    <div>
      <nav>
        <div className="container">
          <svg
            class="UP8CN sGcbL"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            version="1.1"
            aria-labelledby="unsplash-home"
            aria-hidden="false"
          >
            <desc lang="en-US">Unsplash logo</desc>
            <title id="unsplash-home">Unsplash Home</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg>

          <div className="btn">
            <button onClick={mySearch}>
              <CiSearch />
            </button>
            <input
              type="text"
              placeholder="Search high-resolution images"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={mySearch}>
              <IoMdQrScanner />
            </button>
          </div>

          <div className="text">
            <p>Advertise</p>
            <p>Blogs</p>
            <p>Unsplash+</p>
          </div>

          <div className="logo">
            <button>Submit a Photo</button>
            <i>
              <TbBellRinging2Filled />
            </i>
            <img src="public/person.jpg" alt="" />
            <i>
              <FaBars />
            </i>
          </div>
        </div>
      </nav>

      <div className="grand">
        <div className="text1">
          <h1>Unsplash</h1>
          <p>The Internet source for visual.</p>

          <div className="text1i">
            <p>Powered by creators everywhere.</p>
            <h1>
              Supported by{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="114"
                height="16"
                class="zdCVl"
              >
                <title>Squarespace</title>
                <path d="m3.249 7.503 6.384-6.29A3.824 3.824 0 0 1 12.255.167c.969 0 1.938.386 2.622 1.048l.513.496-.969.993-.57-.496a2.322 2.322 0 0 0-1.653-.662c-.627 0-1.197.22-1.653.662L4.218 8.44l-.969-.938Zm9.519-3.255-.969-.938-6.441 6.235c-.912.883-2.394.883-3.249 0a2.213 2.213 0 0 1 0-3.2L7.638.938 6.612 0 1.083 5.407a3.614 3.614 0 0 0 0 5.13 3.824 3.824 0 0 0 2.622 1.05c.969 0 1.938-.387 2.622-1.05l6.441-6.289Zm3.705.11c-.969 0-1.938.387-2.622 1.049l-6.384 6.29 1.026.993 6.441-6.235c.912-.883 2.394-.883 3.249 0 .456.442.684.993.684 1.6 0 .607-.228 1.159-.684 1.6l-5.529 5.407 1.026.993 5.529-5.407c1.482-1.434 1.482-3.696 0-5.13-.798-.773-1.71-1.16-2.736-1.16Zm-.456 3.145-6.441 6.29a2.324 2.324 0 0 1-3.249 0l-.513-.496-.969.993.513.496a3.824 3.824 0 0 0 2.622 1.049c.969 0 1.938-.387 2.622-1.049l6.384-6.234-.969-1.049Zm14.25.607c-.228-.165-.456-.33-.741-.441-.285-.11-.627-.22-.969-.331l-.57-.166c-.228-.055-.456-.165-.627-.22-.171-.055-.342-.166-.456-.221-.114-.11-.228-.165-.285-.276a1.013 1.013 0 0 1-.114-.441c0-.276.114-.552.342-.717.228-.166.57-.276.969-.276.456 0 .798.11 1.026.276.228.165.399.44.513.772l1.368-.11a2.051 2.051 0 0 0-.855-1.545c-.513-.386-1.14-.607-1.995-.607-.456 0-.855.055-1.197.165-.342.11-.627.276-.912.497-.228.22-.456.441-.57.717-.114.276-.228.607-.228.938 0 .331.057.607.171.828.114.22.285.441.456.662.228.165.456.33.741.496.285.11.627.276.969.331l.627.166c.228.055.456.11.627.165.171.056.342.11.456.221.114.11.228.166.285.331.057.11.114.276.114.442 0 .386-.114.662-.399.882-.285.221-.627.331-1.14.331-.513 0-.912-.11-1.197-.33a1.482 1.482 0 0 1-.57-.939l-1.368.11c.114.773.456 1.38 1.026 1.766.57.386 1.254.552 2.052.552a4.58 4.58 0 0 0 1.254-.166c.399-.11.684-.275.969-.496.285-.22.456-.497.627-.773.171-.33.228-.662.228-.993 0-.33-.057-.662-.171-.882-.114-.331-.228-.552-.456-.718ZM40.47 9.766a5.35 5.35 0 0 1-.855 1.324l1.083 1.269v.33H39.33l-.741-.882c-.285.11-.57.22-.855.276-.342.055-.684.055-1.026.055-.627 0-1.197-.11-1.653-.331a4.068 4.068 0 0 1-1.254-.828c-.342-.386-.627-.772-.798-1.324A5.05 5.05 0 0 1 32.718 8c0-.607.114-1.159.285-1.655.171-.497.456-.938.798-1.324.342-.387.798-.662 1.254-.883a4.009 4.009 0 0 1 1.653-.331c.627 0 1.14.11 1.653.33.513.277.969.553 1.311.939.342.386.627.827.798 1.324a5.05 5.05 0 0 1 .285 1.655c0 .607-.114 1.159-.285 1.71Zm-1.197-1.71a3.56 3.56 0 0 0-.171-1.16 2.517 2.517 0 0 0-.513-.937c-.228-.276-.513-.442-.798-.607-.342-.166-.684-.221-1.083-.221-.399 0-.741.055-1.083.22-.342.166-.57.332-.798.608a2.517 2.517 0 0 0-.513.938 3.56 3.56 0 0 0-.171 1.158c0 .442.057.828.171 1.159.114.386.285.662.513.938.228.276.513.496.798.607.342.165.684.22 1.083.22.399 0 .741-.055 1.083-.22.342-.166.57-.331.798-.607.228-.276.399-.552.513-.938a3.56 3.56 0 0 0 .171-1.159Zm8.835.716c0 .718-.171 1.27-.456 1.6-.342.331-.741.552-1.368.552-.57 0-1.026-.165-1.368-.552-.342-.33-.456-.882-.456-1.6V3.917h-1.425v4.91c0 .552.057 1.049.228 1.49.171.386.342.773.627.993.285.276.627.442 1.026.552.399.11.855.166 1.368.166.513 0 .969-.056 1.368-.166.399-.11.741-.331 1.026-.552.285-.276.513-.607.627-.993.171-.386.228-.883.228-1.49v-4.91h-1.425v4.855Zm7.923-4.69 2.85 7.449v.386h-1.425l-.798-2.262h-3.534l-.798 2.262h-1.311v-.386l2.907-7.448h2.109Zm.228 4.415-.456-1.27c-.171-.496-.342-.882-.399-1.213-.114-.331-.228-.552-.285-.828h-.399a.779.779 0 0 0-.114.386c-.057.11-.114.276-.171.442l-.171.496c-.057.221-.171.442-.228.662l-.456 1.27h2.679v.055Zm8.208.22 2.337 2.814v.386h-1.368l-2.451-3.09h-.912v3.09h-1.425V4.083h2.622c.399 0 .798 0 1.197.055s.684.165 1.026.386c.627.386.969 1.048.969 1.82 0 .332-.057.663-.171.939-.114.276-.228.496-.456.662a2.53 2.53 0 0 1-.627.441 1.794 1.794 0 0 1-.741.331Zm-1.14-1.048c.57 0 .969-.11 1.254-.276.285-.165.456-.496.456-.938 0-.441-.171-.772-.456-.938a2.791 2.791 0 0 0-1.254-.276h-1.254v2.373h1.254v.055Zm6.669.828h3.591v-1.16h-3.591v-2.04h3.876V4.083h-5.244v7.834h5.358v-1.214h-3.933V8.497h-.057Zm11.229-.387c-.228-.165-.456-.33-.741-.441-.285-.11-.627-.22-.969-.331l-.57-.166c-.228-.055-.456-.165-.627-.22-.171-.055-.342-.166-.456-.221-.114-.11-.228-.165-.285-.276a1.014 1.014 0 0 1-.114-.441c0-.276.114-.552.342-.717.228-.166.57-.276.969-.276.456 0 .798.11 1.026.276.228.165.399.44.513.772l1.368-.11a2.051 2.051 0 0 0-.855-1.545c-.513-.386-1.14-.607-1.995-.607-.456 0-.855.055-1.197.165-.342.11-.627.276-.912.497-.228.22-.456.441-.57.717-.114.276-.228.607-.228.938 0 .331.057.607.171.828.114.22.285.441.456.662.228.165.456.33.741.496.285.11.627.276.969.331l.627.166c.228.055.456.11.627.165.171.056.342.11.456.221.114.11.228.166.285.331.057.11.114.276.114.442 0 .386-.114.662-.399.882-.285.221-.627.331-1.14.331-.513 0-.912-.11-1.197-.33a1.482 1.482 0 0 1-.57-.939l-1.368.11c.114.773.456 1.38 1.026 1.766.57.386 1.254.552 2.052.552a4.58 4.58 0 0 0 1.254-.166c.399-.11.684-.275.969-.496.285-.22.456-.497.627-.773.171-.33.228-.662.228-.993 0-.33-.057-.662-.171-.882-.114-.331-.228-.552-.456-.718Zm8.55-2.593c.114.276.171.607.171.938 0 .386-.057.773-.228 1.048-.114.276-.342.552-.627.773-.285.22-.57.33-.969.441-.399.11-.798.166-1.311.166h-1.482v3.034h-1.425V4.083h3.021c.57 0 1.026.055 1.425.165.399.11.684.276.912.497.285.22.456.496.513.772Zm-1.254.993c0-.22-.057-.441-.114-.607-.114-.165-.228-.275-.342-.386-.171-.11-.342-.165-.57-.22-.228-.056-.456-.056-.684-.056h-1.425v2.483h1.368c.228 0 .456 0 .684-.055.228-.055.399-.11.57-.22.171-.111.285-.221.342-.387a.911.911 0 0 0 .171-.552Zm6.84-2.427 2.85 7.448v.386h-1.425l-.798-2.262h-3.534l-.798 2.262h-1.311v-.386l2.907-7.448h2.109Zm.228 4.414-.456-1.27c-.171-.496-.342-.882-.399-1.213-.114-.331-.228-.552-.285-.828h-.399a.779.779 0 0 0-.114.386c-.057.11-.114.276-.171.442l-.171.496c-.057.221-.171.442-.228.662l-.456 1.27h2.679v.055Zm8.949 1.986c-.342.22-.798.386-1.311.386-.399 0-.798-.055-1.083-.22-.342-.166-.57-.332-.798-.608a2.517 2.517 0 0 1-.513-.938 3.56 3.56 0 0 1-.171-1.158c0-.386.057-.773.171-1.159.114-.33.285-.662.513-.938.228-.276.456-.441.798-.607.342-.165.684-.22 1.083-.22.513 0 .912.11 1.254.33.342.221.627.552.798.939l1.425-.276a3.218 3.218 0 0 0-1.254-1.6c-.627-.386-1.368-.607-2.223-.607-.627 0-1.14.11-1.653.33-.513.222-.912.497-1.254.884-.342.386-.627.772-.798 1.269a4.981 4.981 0 0 0-.285 1.6c0 .607.114 1.103.285 1.6.171.496.456.938.798 1.269.342.386.798.662 1.254.827.513.22 1.026.331 1.653.331.456 0 .912-.055 1.311-.165a2.93 2.93 0 0 0 1.026-.497c.285-.22.57-.441.741-.717.228-.276.399-.552.513-.883l-1.425-.22c-.228.551-.513.827-.855 1.048Zm5.472.165V8.441h3.591V7.228h-3.591V5.186h3.876V3.972h-5.301v7.89h5.358v-1.214h-3.933Z"></path>
              </svg>
            </h1>
          </div>
          <div className="btn1">
            <button onClick={mySearch}>
              <CiSearch />
            </button>
            <input
              type="text"
              placeholder="Search high-resolution images"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={mySearch}>
              <IoMdQrScanner />
            </button>
          </div>
        </div>

        <div className="main1">
          <div className="main">
            <div className="list">
              <p>
                <b>Collection</b>
              </p>
              <p>See all</p>
            </div>

            <div className="list1">
              <img src="public/premium_photo-1.avif" alt="" />
              <div className="text2">
                <h1>Winter Adventures by Josh...</h1>
                <p>by Unsplash+ Collections.</p>
              </div>
            </div>

            <div className="list1">
              <img src="public/premium_photo-1.avif" alt="" />
              <div className="text2">
                <h1>Vintage</h1>
                <p>by Katri Lietsala.</p>
              </div>
            </div>

            <div className="list1">
              <img src="public/premium_photo-1.avif" alt="" />
              <div className="text2">
                <h1>Rain</h1>
                <p>by Elissa boswell.</p>
              </div>
            </div>

            <div className="list1">
              <img src="public/premium_photo-1.avif" alt="" />
              <div className="text2">
                <h1>Put in Netural in Mathild</h1>
                <p>by Unsplash+ Collections.</p>
              </div>
            </div>
          </div>

          <div className="image">
            <img src="public/Photo-5.avif" alt="" />
          </div>
        </div>
      </div>

      <div className="images1">
        {" "}
        {splash.map((sp) => {
          const { urls } = sp;
          return (
            <>
              {/* <h1>{slug}</h1> */}
              <img src={urls.thumb} alt="" />

              {/* <h2>{description}</h2> */}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
