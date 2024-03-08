import { useState } from "preact/hooks";

import LinkComponent from "../components/LinkComponent.tsx";
import ProjectComponent from "../components/ProjectComponent.tsx";
import FeedEntryComponent from "../components/FeedEntryComponent.tsx";

import { FileText, List } from "preact-feather";

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

interface TabsProps {
  links: {
    url: string;
    title: string;
  }[];
  projects: {
    url: string;
    title: string;
    description: string;
  }[];
  feed: {
    title: string;
    date: Date;
    url: string;
  }[] | undefined;
}

export default function TabsIsland(props: TabsProps) {
  const [openTab, setOpenTab] = useState(1);

  const { links, feed, projects } = props;

  return (
    <div class="flex flex-wrap w-full">
      <div class="w-full">
        {feed && (
          <ul
            class="flex bg-gray-100 mb-0 list-none flex-wrap px-1 py-1 flex-row rounded-xl"
            role="tablist"
          >
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                class={`rounded-lg text-xs font-bold px-1 py-1 block leading-normal ${
                  openTab === 1
                    ? "text-gray-900 shadow bg-white hover:bg-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#"
                role="tablist"
              >
                Projects
              </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                class={`rounded-lg text-xs font-bold px-1 py-1 block leading-normal ${
                  openTab === 2
                    ? "text-gray-900 shadow bg-white hover:bg-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#"
                role="tablist"
              >
                Newsletter
              </a>
            </li>
            {/* <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                class={`rounded-lg text-xs font-bold px-1 py-1 block leading-normal ${
                  openTab === 3
                    ? "text-gray-900 shadow bg-white hover:bg-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#"
                role="tablist"
              >
                Social Accounts
              </a>
            </li> */}
          </ul>
        )}
        <div class="relative mt-4 flex flex-col bg-white w-full">
          <div class="flex-auto">
            <div>
              <div class={`${openTab === 1 ? "block" : "hidden"}`}>
                <ul class="space-y-2">
                    {projects.length === 0 &&
                    (
                      <div class="flex flex-col items-center space-y-1 py-8">
                        <List size={32} color="#9ca3af" />
                        <h2 class="text-sm font-bold text-gray-400 leading-tight mb-1">
                          No projects yet.
                        </h2>
                      </div>
                    )}
                  {projects.map((project) => <ProjectComponent project={project} />)}
                </ul>
              </div>
              {feed && (
                <div class={`${openTab === 2 ? "block space-y-3" : "hidden"}`}>
                  {feed.length === 0 && (
                    <div class="flex flex-col items-center space-y-1 py-8">
                      <FileText size={32} color="#9ca3af" />
                      <h2 class="text-sm font-bold text-gray-400 leading-tight mb-1">
                        No posts yet.
                      </h2>
                    </div>
                  )}
                  {feed
                    .slice()
                    .sort(
                      (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                    )
                    .map((entry) => (
                      <FeedEntryComponent entry={entry} />
                    ))}
                </div>
              )}
              {/* {links && (
                <div class={`${openTab === 3 ? "block space-y-3" : "hidden"}`}>
                  <ul class="space-y-2">
                    {links.length === 0 && (
                      <div class="flex flex-col items-center space-y-1 py-8">
                        <List size={32} color="#9ca3af" />
                        <h2 class="text-sm font-bold text-gray-400 leading-tight mb-1">
                          No links yet.
                        </h2>
                      </div>
                    )}
                    {links.map((link) => (
                      <LinkComponent link={link} />
                    ))}
                  </ul>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
