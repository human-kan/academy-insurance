import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const articles = [
  {
    category: "Auto Insurance",
    title: "What is PIP and How Can I Save?",
    excerpt: "Florida is a no-fault state. PIP covers 80% of your medical costs and 60% of lost wages — here's how to lower your premium.",
    date: "October 3, 2020",
    readTime: "4 min read",
    color: "bg-blue-100 text-blue-800",
  },
  {
    category: "Property Insurance",
    title: "Actual Cash Value vs. Replacement Cost: What's the Difference?",
    excerpt: "ACV pays depreciated value. RC pays for brand-new replacements. The difference could cost you thousands when you need it most.",
    date: "July 22, 2020",
    readTime: "5 min read",
    color: "bg-green-100 text-green-800",
  },
  {
    category: "Agency Tips",
    title: "Why Use an Insurance Agent or Broker?",
    excerpt: "Rates are identical either way — but a broker works for YOU. We re-shop rates every year at no extra cost. Here's why that matters.",
    date: "June 2, 2020",
    readTime: "3 min read",
    color: "bg-amber-100 text-amber-800",
  },
  {
    category: "Commercial Insurance",
    title: "Co-Insurance Explained",
    excerpt: "Under-insuring your building can reduce your claim payout dramatically. Learn how the co-insurance clause works and how to avoid costly mistakes.",
    date: "May 19, 2020",
    readTime: "6 min read",
    color: "bg-purple-100 text-purple-800",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Insurance Insights
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Learn what you need to know before you buy. Expert guidance from your St. Pete insurance team.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {articles.map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                data-testid={`card-blog-${i}`}
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${article.color}`}>
                      <Tag className="h-3 w-3" />
                      {article.category}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <button
                      className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-secondary transition-colors group/btn"
                      data-testid={`link-read-more-${i}`}
                    >
                      Read More <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-muted/50 rounded-2xl p-10 max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">Have an Insurance Question?</h3>
              <p className="text-muted-foreground mb-6">Our team is happy to answer your questions about coverage, costs, and Florida insurance requirements.</p>
              <a
                href="mailto:accountadvisor@academyagents.com"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                data-testid="link-blog-contact"
              >
                Ask Our Team <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
