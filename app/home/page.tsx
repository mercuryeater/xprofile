import Contributors from "./Contributors";
import PreviewCard from "./PreviewCard";
import TitleSection from "./TitleSection";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
    return (
        <div className="p-1">
            <TitleSection />
            <PreviewCard />
            <Contributors />
            <div className="md:px-24 grid my-20 md:grid-cols-2 grid-flow-col md:grid-flow-row md:grid-rows-1 grid-rows-2">
                <div className="md:px-10">
                    <h2 className="md:text-5xl my-6 md:my-10 text-3xl mt-14 font-semibold h-max mx-auto bg-gradient-to-r bg-gradient-radial from-slate-400 via-slate-600 to-slate-400  dark:from-slate-500 dark:via-slate-200 dark:to-slate-500 bg-clip-text text-[rgba(0,0,0,0)]">
                        Create & Host Your One Page Portfolio Site in less than 5 minutes
                    </h2>
                    <p className="text-xl md:text-lg leading-8 my-6 md:my-10 text-[rgba(209,213,219,1)]">Craft your unique online presence effortlessly with our intuitive one-page portfolio builder. Showcase your skills, projects, and links in minutes.</p>
                    <Button variant={'outline'} >
                        Create Your XLink
                    </Button>
                </div>
                <div className="relative mt-16 h-52">
                    <div className="absolute top-[50%] md:left-40 left-20 w-40 aspect-square border border-slate-500 rounded-3xl backdrop-blur-md bg-[rgba(35,45,60,0.2)]">
                        <div className="px-5 py-2 rounded-full left-[-40%] top-[50%] absolute inline text-slate-900 bg-slate-200 ">
                            xlink.io/test
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-4 top-4" width={60} height={60} version="1.1" viewBox="0.00 0.00 89 89">
                                <g stroke-width="2.00" fill="none" stroke-linecap="butt">
                                    <path stroke="#747474" vector-effect="non-scaling-stroke" d="
  M 55.43 2.23
  C 65.95 10.06 64.65 26.03 62.96 37.32
  A 1.42 1.42 0.0 0 0 63.17 38.30
  Q 68.82 47.06 70.59 57.34
  Q 70.67 57.82 71.15 57.81
  L 77.36 57.73
  A 0.72 0.70 82.9 0 1 78.06 58.29
  L 80.40 68.92"
                                    />
                                    <path stroke="#747474" vector-effect="non-scaling-stroke" d="
  M 78.30 71.63
  L 75.77 61.28
  A 0.69 0.69 0.0 0 0 75.10 60.76
  L 70.36 60.76
  A 0.80 0.79 -78.1 0 0 69.63 61.24
  Q 67.58 65.92 62.91 67.98
  Q 62.43 68.19 62.37 68.71
  L 62.01 71.57
  Q 61.92 72.30 61.18 72.30
  L 31.03 72.34
  A 0.80 0.79 -5.8 0 1 30.25 71.71
  L 29.25 66.81
  Q 29.14 66.25 28.79 65.80
  L 25.09 61.07
  A 0.84 0.83 -18.8 0 0 24.43 60.75
  L 13.00 60.75
  Q 12.56 60.75 12.46 61.18
  L 9.92 72.00"
                                    />
                                    <path stroke="#747474" vector-effect="non-scaling-stroke" d="
  M 7.48 68.71
  L 10.00 58.42
  Q 10.12 57.91 10.64 57.91
  L 22.95 57.94
  Q 23.40 57.94 23.36 57.49
  C 22.82 51.55 25.83 45.92 28.74 40.59
  Q 28.99 40.15 28.95 39.64
  Q 27.55 22.23 27.54 17.03
  Q 27.51 6.39 38.01 0.93"
                                    />
                                    <path stroke="#747474" vector-effect="non-scaling-stroke" d="
  M 61.14 18.30
  Q 55.12 15.13 50.79 9.91
  Q 50.46 9.51 50.10 9.88
  C 45.99 14.21 37.43 14.77 31.77 15.37
  Q 31.23 15.43 31.24 15.97
  Q 31.43 26.22 40.34 30.63
  Q 41.64 31.28 41.89 31.79
  Q 42.30 32.65 41.76 34.02
  A 0.49 0.49 0.0 0 0 42.21 34.69
  L 49.88 34.88
  A 0.58 0.58 0.0 0 0 50.48 34.31
  L 50.51 32.15
  A 1.01 1.00 80.2 0 1 51.16 31.22
  Q 59.75 28.06 61.49 19.03
  A 0.67 0.67 0.0 0 0 61.14 18.30"
                                    />
                                    <path stroke="#747474" vector-effect="non-scaling-stroke" d="
  M 60.46 48.87
  L 58.02 46.97
  Q 57.40 46.49 57.24 47.26
  L 56.87 49.05
  A 0.56 0.55 -87.0 0 0 57.47 49.72
  L 60.30 49.42
  A 0.31 0.31 0.0 0 0 60.46 48.87"
                                    />
                                    <path stroke="#747474" vector-effect="non-scaling-stroke" d="
  M 33.42 49.09
  A 0.46 0.46 0.0 0 0 33.90 49.79
  L 34.75 49.59
  A 0.52 0.52 0.0 0 0 34.76 48.57
  Q 33.90 48.36 33.42 49.09"
                                    />
                                    <path stroke="#747474" vector-effect="non-scaling-stroke" d="
  M 59.83 70.50
  A 0.31 0.31 0.0 0 0 60.14 70.25
  L 63.27 53.37
  A 0.31 0.31 0.0 0 0 62.97 53.00
  L 29.14 53.00
  A 0.31 0.31 0.0 0 0 28.84 53.37
  L 31.96 70.25
  A 0.31 0.31 0.0 0 0 32.27 70.50
  L 59.83 70.50"
                                    />
                                    <path stroke="#747474" vector-effect="non-scaling-stroke" d="
  M 47.36 61.71
  A 1.94 1.94 0.0 0 0 45.42 59.77
  A 1.94 1.94 0.0 0 0 43.48 61.71
  A 1.94 1.94 0.0 0 0 45.42 63.65
  A 1.94 1.94 0.0 0 0 47.36 61.71"
                                    />
                                    <path stroke="#747474" vector-effect="non-scaling-stroke" d="
  M 55.32 86.83
  L 33.15 86.88"
                                    />
                                </g>
                                <path fill="#000000" d="
  M 55.43 2.23
  C 65.95 10.06 64.65 26.03 62.96 37.32
  A 1.42 1.42 0.0 0 0 63.17 38.30
  Q 68.82 47.06 70.59 57.34
  Q 70.67 57.82 71.15 57.81
  L 77.36 57.73
  A 0.72 0.70 82.9 0 1 78.06 58.29
  L 80.40 68.92
  L 78.30 71.63
  L 75.77 61.28
  A 0.69 0.69 0.0 0 0 75.10 60.76
  L 70.36 60.76
  A 0.80 0.79 -78.1 0 0 69.63 61.24
  Q 67.58 65.92 62.91 67.98
  Q 62.43 68.19 62.37 68.71
  L 62.01 71.57
  Q 61.92 72.30 61.18 72.30
  L 31.03 72.34
  A 0.80 0.79 -5.8 0 1 30.25 71.71
  L 29.25 66.81
  Q 29.14 66.25 28.79 65.80
  L 25.09 61.07
  A 0.84 0.83 -18.8 0 0 24.43 60.75
  L 13.00 60.75
  Q 12.56 60.75 12.46 61.18
  L 9.92 72.00
  L 7.48 68.71
  L 10.00 58.42
  Q 10.12 57.91 10.64 57.91
  L 22.95 57.94
  Q 23.40 57.94 23.36 57.49
  C 22.82 51.55 25.83 45.92 28.74 40.59
  Q 28.99 40.15 28.95 39.64
  Q 27.55 22.23 27.54 17.03
  Q 27.51 6.39 38.01 0.93
  Q 46.66 -0.24 55.43 2.23
  Z
  M 61.14 18.30
  Q 55.12 15.13 50.79 9.91
  Q 50.46 9.51 50.10 9.88
  C 45.99 14.21 37.43 14.77 31.77 15.37
  Q 31.23 15.43 31.24 15.97
  Q 31.43 26.22 40.34 30.63
  Q 41.64 31.28 41.89 31.79
  Q 42.30 32.65 41.76 34.02
  A 0.49 0.49 0.0 0 0 42.21 34.69
  L 49.88 34.88
  A 0.58 0.58 0.0 0 0 50.48 34.31
  L 50.51 32.15
  A 1.01 1.00 80.2 0 1 51.16 31.22
  Q 59.75 28.06 61.49 19.03
  A 0.67 0.67 0.0 0 0 61.14 18.30
  Z
  M 60.46 48.87
  L 58.02 46.97
  Q 57.40 46.49 57.24 47.26
  L 56.87 49.05
  A 0.56 0.55 -87.0 0 0 57.47 49.72
  L 60.30 49.42
  A 0.31 0.31 0.0 0 0 60.46 48.87
  Z
  M 33.42 49.09
  A 0.46 0.46 0.0 0 0 33.90 49.79
  L 34.75 49.59
  A 0.52 0.52 0.0 0 0 34.76 48.57
  Q 33.90 48.36 33.42 49.09
  Z
  M 59.83 70.50
  A 0.31 0.31 0.0 0 0 60.14 70.25
  L 63.27 53.37
  A 0.31 0.31 0.0 0 0 62.97 53.00
  L 29.14 53.00
  A 0.31 0.31 0.0 0 0 28.84 53.37
  L 31.96 70.25
  A 0.31 0.31 0.0 0 0 32.27 70.50
  L 59.83 70.50
  Z"
                                />
                                <path fill="#e7e7e7" d="
  M 38.01 0.93
  Q 27.51 6.39 27.54 17.03
  Q 27.55 22.23 28.95 39.64
  Q 28.99 40.15 28.74 40.59
  C 25.83 45.92 22.82 51.55 23.36 57.49
  Q 23.40 57.94 22.95 57.94
  L 10.64 57.91
  Q 10.12 57.91 10.00 58.42
  L 7.48 68.71
  Q 0.97 58.76 0.00 46.61
  L 0.00 42.23
  Q 4.39 7.85 38.01 0.93
  Z"
                                />
                                <path fill="#e7e7e7" d="
  M 55.43 2.23
  C 74.45 7.34 86.08 23.16 88.00 42.35
  L 88.00 46.47
  Q 87.01 58.79 80.40 68.92
  L 78.06 58.29
  A 0.72 0.70 82.9 0 0 77.36 57.73
  L 71.15 57.81
  Q 70.67 57.82 70.59 57.34
  Q 68.82 47.06 63.17 38.30
  A 1.42 1.42 0.0 0 1 62.96 37.32
  C 64.65 26.03 65.95 10.06 55.43 2.23
  Z"
                                />
                                <path fill="#e7e7e7" d="
  M 61.14 18.30
  A 0.67 0.67 0.0 0 1 61.49 19.03
  Q 59.75 28.06 51.16 31.22
  A 1.01 1.00 80.2 0 0 50.51 32.15
  L 50.48 34.31
  A 0.58 0.58 0.0 0 1 49.88 34.88
  L 42.21 34.69
  A 0.49 0.49 0.0 0 1 41.76 34.02
  Q 42.30 32.65 41.89 31.79
  Q 41.64 31.28 40.34 30.63
  Q 31.43 26.22 31.24 15.97
  Q 31.23 15.43 31.77 15.37
  C 37.43 14.77 45.99 14.21 50.10 9.88
  Q 50.46 9.51 50.79 9.91
  Q 55.12 15.13 61.14 18.30
  Z"
                                />
                                <path fill="#e7e7e7" d="
  M 60.46 48.87
  A 0.31 0.31 0.0 0 1 60.30 49.42
  L 57.47 49.72
  A 0.56 0.55 -87.0 0 1 56.87 49.05
  L 57.24 47.26
  Q 57.40 46.49 58.02 46.97
  L 60.46 48.87
  Z"
                                />
                                <path fill="#e7e7e7" d="
  M 33.42 49.09
  Q 33.90 48.36 34.76 48.57
  A 0.52 0.52 0.0 0 1 34.75 49.59
  L 33.90 49.79
  A 0.46 0.46 0.0 0 1 33.42 49.09
  Z"
                                />
                                <path fill="#e7e7e7" d="
  M 59.83 70.50
  L 32.27 70.50
  A 0.31 0.31 0.0 0 1 31.96 70.25
  L 28.84 53.37
  A 0.31 0.31 0.0 0 1 29.14 53.00
  L 62.97 53.00
  A 0.31 0.31 0.0 0 1 63.27 53.37
  L 60.14 70.25
  A 0.31 0.31 0.0 0 1 59.83 70.50
  Z
  M 47.36 61.71
  A 1.94 1.94 0.0 0 0 45.42 59.77
  A 1.94 1.94 0.0 0 0 43.48 61.71
  A 1.94 1.94 0.0 0 0 45.42 63.65
  A 1.94 1.94 0.0 0 0 47.36 61.71
  Z"
                                />
                                <circle fill="#000000" cx="45.42" cy="61.71" r="1.94" />
                                <path fill="#e7e7e7" d="
  M 78.30 71.63
  Q 69.62 82.83 55.32 86.83
  L 33.15 86.88
  Q 19.22 83.45 9.92 72.00
  L 12.46 61.18
  Q 12.56 60.75 13.00 60.75
  L 24.43 60.75
  A 0.84 0.83 -18.8 0 1 25.09 61.07
  L 28.79 65.80
  Q 29.14 66.25 29.25 66.81
  L 30.25 71.71
  A 0.80 0.79 -5.8 0 0 31.03 72.34
  L 61.18 72.30
  Q 61.92 72.30 62.01 71.57
  L 62.37 68.71
  Q 62.43 68.19 62.91 67.98
  Q 67.58 65.92 69.63 61.24
  A 0.80 0.79 -78.1 0 1 70.36 60.76
  L 75.10 60.76
  A 0.69 0.69 0.0 0 1 75.77 61.28
  L 78.30 71.63
  Z"
                                />
                                <path fill="#000000" d="
  M 33.15 86.88
  L 55.32 86.83
  Q 44.13 89.97 33.15 86.88
  Z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="absolute -z-10 top-[35%] left-32 md:left-52 w-40 aspect-square border border-slate-500 rounded-3xl backdrop-blur-md bg-[rgba(35,45,60,0.2)]">
                        <svg width="28" height="24" className="absolute right-4 top-4" viewBox="0 0 28 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="rgb(209,213,219)" d="M27.3085 3.34612L24.2742 4.10469L26.5499 1.07041L22.7571 2.58755C21.9715 1.55866 20.8371 0.852187 19.5672 0.600964C18.2972 0.34974 16.9793 0.571072 15.8611 1.22334C14.7429 1.87562 13.9015 2.9139 13.4951 4.14297C13.0887 5.37205 13.1453 6.70725 13.6542 7.89754C9.10283 7.13897 4.55141 5.62183 2.27571 1.82898C1.85544 2.41938 1.56047 3.08955 1.40896 3.79823C1.25745 4.50692 1.25261 5.23911 1.39473 5.94974C1.53686 6.66036 1.82294 7.33438 2.23537 7.93027C2.64779 8.52617 3.17783 9.03134 3.79284 9.41467L0.758569 8.65611C0.758569 11.6904 3.03428 13.2075 5.30998 13.9661C4.56033 14.1305 3.78393 14.1305 3.03428 13.9661C3.79284 16.2418 6.06855 17.7589 8.34426 17.7589C5.9708 19.5862 2.97253 20.404 0 20.0346C2.27571 21.5518 5.30998 23.0689 8.34426 23.0689C10.5016 23.0714 12.637 22.6356 14.6208 21.788C16.6047 20.9404 18.3958 19.6987 19.8853 18.1382C21.3749 16.5777 22.532 14.7309 23.2865 12.7097C24.0409 10.6886 24.3769 8.53529 24.2742 6.3804L27.3085 3.34612Z"  />
                        </svg>
                    </div>
                    <div className="absolute -z-20 top-[20%] left-44 md:left-64 w-40 aspect-square border border-slate-500 rounded-3xl backdrop-blur-md bg-[rgba(35,45,60,0.2)]">
                        <svg width="27" height="28" className="absolute right-4 top-4" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" fill="rgb(209,213,219)" clip-rule="evenodd" d="M13.5036 0.5C9.83734 0.5 9.37432 0.51518 7.93212 0.575904C6.49751 0.644219 5.51832 0.871935 4.66059 1.20592C3.75724 1.54366 2.93861 2.07474 2.26199 2.76198C1.57884 3.43754 1.0475 4.24972 0.705926 5.153C0.312165 6.20259 0.0991419 7.31133 0.07591 8.43211C0.0151857 9.87431 0 10.3297 0 14.0036C0 17.6698 0.0151857 18.1252 0.07591 19.5674C0.151815 21.0096 0.379533 21.9888 0.705926 22.8465C1.04465 23.7472 1.57567 24.5631 2.26199 25.2376C3.02104 25.989 3.7725 26.452 4.66059 26.7936C5.51832 27.1276 6.49751 27.3553 7.93212 27.4236C9.37432 27.4919 9.82975 27.4995 13.5036 27.4995C17.1698 27.4995 17.6328 27.4919 19.0674 27.4236C20.5096 27.3553 21.4964 27.1276 22.3465 26.7936C23.2472 26.4549 24.0631 25.9239 24.7376 25.2376C25.4241 24.5633 25.9551 23.7473 26.2936 22.8465C26.6352 21.9888 26.8629 21.002 26.9236 19.5674C26.9919 18.1252 26.9995 17.6698 26.9995 14.0036C26.9995 10.3297 26.9919 9.87431 26.9236 8.43211C26.8553 6.98991 26.6352 6.01073 26.2936 5.153C25.9549 4.25236 25.4239 3.43641 24.7376 2.76198C24.0631 2.07566 23.2472 1.54464 22.3465 1.20592C21.297 0.811874 20.1882 0.598843 19.0674 0.575904C17.6252 0.51518 17.1698 0.5 13.5036 0.5ZM13.5036 18.5048C12.3068 18.5048 11.159 18.0293 10.3127 17.1831C9.46643 16.3368 8.99099 15.189 8.99099 13.9922C8.99099 12.7954 9.46643 11.6476 10.3127 10.8013C11.159 9.95503 12.3068 9.4796 13.5036 9.4796C14.7014 9.4796 15.8501 9.95543 16.6971 10.8024C17.5441 11.6494 18.0199 12.7982 18.0199 13.996C18.0199 15.1938 17.5441 16.3425 16.6971 17.1895C15.8501 18.0365 14.7014 18.5123 13.5036 18.5123V18.5048ZM13.5036 7.05822C12.592 7.05822 11.6893 7.23777 10.8471 7.58662C10.005 7.93546 9.23974 8.44677 8.59516 9.09135C7.95057 9.73594 7.43926 10.5012 7.09042 11.3434C6.74157 12.1855 6.56202 13.0882 6.56202 13.9998C6.56202 14.9113 6.74157 15.814 7.09042 16.6562C7.43926 17.4984 7.95057 18.2636 8.59516 18.9082C9.23974 19.5528 10.005 20.0641 10.8471 20.4129C11.6893 20.7618 12.592 20.9413 13.5036 20.9413C15.3446 20.9413 17.1102 20.21 18.412 18.9082C19.7138 17.6064 20.4451 15.8408 20.4451 13.9998C20.4451 12.1588 19.7138 10.3931 18.412 9.09135C17.1102 7.78956 15.3446 7.05822 13.5036 7.05822ZM22.4604 6.92918C22.4604 7.36402 22.2877 7.78105 21.9802 8.08852C21.6727 8.396 21.2557 8.56874 20.8208 8.56874C20.386 8.56874 19.969 8.396 19.6615 8.08852C19.354 7.78105 19.1813 7.36402 19.1813 6.92918C19.1813 6.49334 19.3544 6.07535 19.6626 5.76716C19.9708 5.45897 20.3888 5.28583 20.8246 5.28583C21.2605 5.28583 21.6785 5.45897 21.9867 5.76716C22.2949 6.07535 22.468 6.49334 22.468 6.92918H22.4604Z" />
                        </svg>
                    </div>
                    <div className="hidden md:block absolute -z-30 top-[5%] left-56 md:left-[304px] w-40 aspect-square border border-slate-500 rounded-3xl backdrop-blur-md bg-[rgba(35,45,60,0.2)]">
                        <svg width="21" height="26" className="absolute right-4 top-4" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="white" d="M14.8745 17.2041V8.09279C16.3931 9.61134 18.6709 10.3706 20.9488 10.3706V6.57423L17.9116 4.29639L14.8745 0.5H11.8374V18.7227C11.8374 19.5195 11.5867 20.2961 11.1208 20.9425C10.6549 21.5889 9.99747 22.0723 9.24156 22.3243C8.48565 22.5762 7.66962 22.584 6.90906 22.3464C6.14851 22.1088 5.48199 21.638 5.00392 21.0005C3.48536 20.2412 2.72608 18.7227 2.72608 17.2041C2.71455 16.6347 2.83127 16.0701 3.06759 15.5519C3.30392 15.0337 3.6538 14.5754 4.0913 14.2108C4.52881 13.8462 5.04274 13.5847 5.59502 13.4457C6.1473 13.3067 6.72378 13.2937 7.28175 13.4077V10.3706C5.79374 10.5629 4.385 11.1525 3.20358 12.0773C2.02217 13.0022 1.11171 14.2283 0.567903 15.6266C0.0240942 17.025 -0.132983 18.5441 0.113177 20.0241C0.359338 21.5042 0.999642 22.8906 1.9668 24.0376C3.21543 24.8506 4.65881 25.3148 6.14728 25.3821C7.63575 25.4493 9.11511 25.1171 10.4319 24.42C11.7488 23.7228 12.8551 22.6861 13.6363 21.4173C14.4175 20.1485 14.845 18.6938 14.8745 17.2041Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}