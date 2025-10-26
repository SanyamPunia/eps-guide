import type React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen mx-auto max-w-4xl px-6 pt-28 bg-background text-foreground">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--color-border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="fixed top-0 left-0 right-0 z-10 px-6 pt-20 md:pt-24">
        <div className="mx-auto max-w-4xl md:px-8">
          <h1 className="inline-block text-6xl md:text-7xl leading-none font-bold tracking-tight px-6 py-3 border border-dashed border-sky-300/60 bg-sky-400/10 group-hover:bg-sky-400/15">
            <span className="relative text-sky-600">Role Driven</span>
            <br />
            UI and Config
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
            A focused practical language and standard for rendering interfaces
            from permissions with deterministic rules small surface area and
            strong ergonomics
          </p>
        </div>
      </div>

      <div className="relative z-20 pt-72">
        <div className="relative mx-auto max-w-4xl border border-zinc-100 bg-white p-8">
          <Section title="Introduction">
            <GuidelineItem description="Treat the server as source of truth for authorization and the client as a guide for visibility" />
            <GuidelineItem description="Prefer capability permissions over role names in every interface decision" />
            <GuidelineItem description="Use a single readable token language for interface and api behavior" />
            <GuidelineItem description="Adopt a compact signed Effective Permission Set for each user and context" />
            <GuidelineItem description="Keep the vocabulary human readable documented and guessable" />
            <GuidelineItem description="Favor small primitives composed well over complex policy tools" />
          </Section>

          <Section title="Permission Language">
            <GuidelineItem description="Use the token grammar shown in code blocks such as `namespace:resource[#action]`" />
            <GuidelineItem description="Use namespaces like `ui` for visibility and `api` for server actions and optional *data* for sensitive fields" />
            <GuidelineItem description="Use hierarchy with intent and keep depth reasonable for clarity" />
            <GuidelineItem description="Use actions like `#read` `#create` `#update` `#delete` `#export` when useful" />
            <GuidelineItem description="Use wildcards carefully single level `*` and optional deep `**`" />
            <GuidelineItem description="Use negation for surgical pruning such as `!ui:dashboard:navbar`" />
          </Section>

          <Section title="Naming Guidance">
            <GuidelineItem description="Prefer intent based names such as `ui:invoice:toolbar:export` over implementation labels" />
            <GuidelineItem description="Keep segments lowercase and use kebab case where needed" />
            <GuidelineItem description="Limit token depth to a practical range that matches the product shape" />
          </Section>

          <Section title="Deterministic Matching">
            <GuidelineItem description="Build separate allow and deny sets and evaluate deterministically" />
            <GuidelineItem description="Choose the best match using exact match then single wildcard then optional deep wildcard" />
            <GuidelineItem description="Let specificity outrank generic matches for predictable outcomes" />
            <GuidelineItem description="Let deny override allow for safety under conflict" />
            <GuidelineItem description="Provide boolean helpers such as `allOf` `anyOf` and `not` for clarity" />
          </Section>

          <Section title="Effective Permission Set (EPS)">
            <GuidelineItem description="Structure the Effective Permission Set with fields like `subject` Structure the Effective Permission Set with fields like `subject` `tenant` `perm_version` `allows` `denies` `issued_at` `ttl` `sig`" />
            <GuidelineItem description="Transport the Effective Permission Set via signed session claims or a dedicated endpoint like `/me/permissions`" />
            <GuidelineItem description="Revalidate freshness using version bumps and entity tags and short time to live values" />
            <GuidelineItem description="Keep the Effective Permission Set small to avoid unnecessary payload weight" />
          </Section>

          <Section title="UI Rendering">
            <GuidelineItem description="Build menus from `ui` tokens and prune with denies for coherence" />
            <GuidelineItem description="Gate routes with `ui` tokens and show a gentle not available state for deep links" />
            <GuidelineItem description="Buttons, tabs, and rows should each have a clear token." />
            <GuidelineItem description="Keep checks close to the elements they guard such as buttons tabs and rows" />
            <GuidelineItem description="Do not fetch privileged data for hidden sections and require matching `api` tokens for data access" />
            <GuidelineItem description="Prefer explainable states and brief reasons when elements are hidden or disabled" />
          </Section>

          <Section title="API Enforcement">
            <GuidelineItem description="Always enforce `api` permissions on the server because interface gates are not security" />
            <GuidelineItem description="Mirror UI and API tokens where helpful." />
            <GuidelineItem description="Mirror interface and api tokens where it aids mental mapping such as `ui:invoice:toolbar:export` with `api:invoice#export`" />
            <GuidelineItem description="Avoid leaking restricted information through counts previews filenames and metadata" />
            <GuidelineItem description="Return clear consistent errors for denied server actions" />
          </Section>

          <Section title="Multi-Tenant Context">
            <GuidelineItem description="Include tenant context in the Effective Permission Set for multi tenant products" />
            <GuidelineItem description="Switching tenants refetches the EPS. Avoid stale grants." />
            <GuidelineItem description="Roles may differ per tenant. Prefer per-tenant assignments." />
          </Section>

          <Section title="Deny Semantics">
            <GuidelineItem description="Model deny as removal of a node and its descendants unless a more specific allow exists" />
            <GuidelineItem description="Reserve deep wildcards and broad denies for administrative bundles and audits" />
          </Section>

          <Section title="Catalog & Documentation">
            <GuidelineItem description="Maintain a permission catalog in both markdown and json for teams and tools" />
            <GuidelineItem description="Describe each token with a single sentence that states what it unlocks and where" />
            <GuidelineItem description="Generate diffs for role changes and review them like code changes" />
          </Section>

          <Section title="Linting & Conventions">
            <GuidelineItem description="Enforce naming lint rules in continuous integration to prevent mistakes" />
            <GuidelineItem description="Disallow deep wildcard by default and allow it only when explicitly configured" />
            <GuidelineItem description="Resolve aliases to canonical tokens at build time for consistency" />
            <GuidelineItem description="Fail builds on unknown namespaces malformed tokens and invalid catalog entries" />
          </Section>

          <Section title="UX Patterns">
            <GuidelineItem description="Prefer soft denial states that show context and a path forward over hard dead ends" />
            <GuidelineItem description="Group controls that always travel together behind a single interface token" />
            <GuidelineItem description="Use `allOf` when both interface and api permission are required to render an action" />
            <GuidelineItem description="Mirror optimistic interface updates and reconcile with the server on failure" />
          </Section>

          <Section title="Accessibility">
            <GuidelineItem description="Remove denied content from the accessibility tree and prevent focus" />
            <GuidelineItem description="Avoid tooltips on disabled controls and place clear nearby explanations" />
            <GuidelineItem description="Preserve keyboard navigation order after pruning interface sections" />
          </Section>

          <Section title="Performance">
            <GuidelineItem description="Use a trie or hashed segments so checks run in time proportional to depth" />
            <GuidelineItem description="Memoize permission checks per render tree to avoid repeated string scanning" />
            <GuidelineItem description="Keep the Effective Permission Set short lived and revalidate with entity tags rather than refetching on every route" />
          </Section>

          <Section title="Testing">
            <GuidelineItem description="Unit test precedence including specific versus wildcard and deny over allow and deep paths" />
            <GuidelineItem description="Snapshot test menus and navigation generated from tokens to catch regressions" />
            <GuidelineItem description="Test tenant switching by diffing Effective Permission Sets before and after the switch" />
            <GuidelineItem description="Add negative tests to verify hidden elements never fetch privileged data" />
          </Section>

          <Section title="Observability & Explainability">
            <GuidelineItem description="Provide an inspector that shows candidate token best allow best deny and final decision" />
            <GuidelineItem description="Log administrative changes to roles and tokens with actor timestamp and diff for audits" />
            <GuidelineItem description="Capture reasons for denials in support tools to speed up resolutions" />
          </Section>

          <Section title="Migration">
            <GuidelineItem description="Plan migration by mapping current checks to explicit tokens with clear intent" />
            <GuidelineItem description="Enforce server side api permissions first then ship Effective Permission Set then gate the interface" />
            <GuidelineItem description="Start with page level tokens then refine to sections and finally to controls" />
            <GuidelineItem description="Enable denies after tests document the intended pruning behavior" />
          </Section>

          <Section title="Anti-Patterns">
            <GuidelineItem description="Avoid relying on role string comparisons inside interface components" />
            <GuidelineItem description="Avoid shipping raw role lists to the client for inference" />
            <GuidelineItem description="Avoid using feature flags as permissions and avoid using permissions as feature flags" />
            <GuidelineItem description="Avoid prefetching restricted data and hiding the container afterward" />
          </Section>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm leading-7 text-muted-foreground">
              Last updated: October 2025 •{" "}
              <Link
                href="#"
                className="underline hover:text-foreground transition-colors"
              >
                View on GitHub
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-sm font-normal mb-2">{title}</h2>
      <div className="text-muted-foreground">{children}</div>
    </section>
  );
}

function GuidelineItem({ description }: { description: React.ReactNode }) {
  const parseDescription = (desc: React.ReactNode): React.ReactNode => {
    if (typeof desc === "string") {
      const parts = desc.split(/(`[^`]+`)/g);
      return (
        <>
          {parts.map((part, i) => {
            if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
              const code = part.slice(1, -1);
              return (
                <code
                  key={i}
                  className="bg-zinc-100 px-1.5 py-0.5 rounded font-mono text-xs"
                >
                  {code}
                </code>
              );
            }
            return <span key={i}>{part}</span>;
          })}
        </>
      );
    }
    return desc;
  };

  return (
    <li className="text-sm leading-7 text-muted-foreground pl-4 relative list-none">
      {parseDescription(description)}
    </li>
  );
}
