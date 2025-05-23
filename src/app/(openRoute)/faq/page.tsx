import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h1>

      <Accordion type="single" collapsible className="w-full">
        {/* What is ThinkGreenly? */}
        <AccordionItem value="item-1">
          <AccordionTrigger className="md:text-xl">
            What is ThinkGreenly?
          </AccordionTrigger>
          <AccordionContent>
            ThinkGreenly is an online community platform where members share and
            discover innovative sustainability ideas to help protect our
            environment. From small daily habits to large-scale projects, we
            connect eco-conscious individuals to accelerate green solutions.
          </AccordionContent>
        </AccordionItem>

        {/* How does ThinkGreenly work? */}
        <AccordionItem value="item-2">
          <AccordionTrigger className="md:text-xl">How does ThinkGreenly work?</AccordionTrigger>
          <AccordionContent>
            Members can submit their sustainability ideas which go through a
            review process by our admin team. Approved ideas become visible to
            the community where others can vote, comment, and implement them. We
            categorize ideas by impact areas like Energy, Waste, and
            Transportation.
          </AccordionContent>
        </AccordionItem>

        {/* Is ThinkGreenly free to use? */}
        <AccordionItem value="item-3">
          <AccordionTrigger className="md:text-xl">Is ThinkGreenly free to use?</AccordionTrigger>
          <AccordionContent>
            Yes! Most features are completely free. Members can browse, submit,
            and discuss ideas at no cost. Some creators may choose to offer
            premium content behind a paywall to support their work, but free
            ideas are always available.
          </AccordionContent>
        </AccordionItem>

        {/* How are ideas moderated? */}
        <AccordionItem value="item-4">
          <AccordionTrigger className="md:text-xl">How are ideas moderated?</AccordionTrigger>
          <AccordionContent>
            Our admin team reviews all submissions for feasibility, originality,
            and environmental impact. Ideas may be approved, rejected with
            feedback, or suggested for improvements. We maintain high standards
            to ensure quality content.
          </AccordionContent>
        </AccordionItem>

        {/* Can I earn from my ideas? */}
        <AccordionItem value="item-5">
          <AccordionTrigger className="md:text-xl">Can I earn from my ideas?</AccordionTrigger>
          <AccordionContent>
            Yes! You can mark your ideas as &quot;Paid&quot; content. Other
            members must purchase access to view these premium ideas.
            ThinkGreenly takes a small percentage to maintain the platform,
            while the majority goes to the creator.
          </AccordionContent>
        </AccordionItem>

        {/* How does the voting system work? */}
        <AccordionItem value="item-6">
          <AccordionTrigger className="md:text-xl">How does the voting system work?</AccordionTrigger>
          <AccordionContent>
            Members can upvote or downvote ideas (one vote per member per idea)
            to indicate which solutions they find most valuable. Top-voted ideas
            get featured on our homepage and may be selected for special
            recognition by our team.
          </AccordionContent>
        </AccordionItem>

        {/* What types of ideas are accepted? */}
        <AccordionItem value="item-7">
          <AccordionTrigger className="md:text-xl">What types of ideas are accepted?</AccordionTrigger>
          <AccordionContent>
            We welcome all sustainability-focused ideas across categories like:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Renewable energy solutions</li>
              <li>Waste reduction techniques</li>
              <li>Sustainable transportation</li>
              <li>Eco-friendly products</li>
              <li>Community action plans</li>
              <li>Policy recommendations</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* How do I submit an idea? */}
        <AccordionItem value="item-8">
          <AccordionTrigger className="md:text-xl">How do I submit an idea?</AccordionTrigger>
          <AccordionContent>
            Log in to your account, go to your dashboard, and click &quot;Create
            New Idea.&quot; You can work on it in draft mode before submitting
            for review. Include clear details about the problem, solution, and
            potential impact.
          </AccordionContent>
        </AccordionItem>

        {/* Can I collaborate on ideas? */}
        <AccordionItem value="item-9">
          <AccordionTrigger className="md:text-xl">Can I collaborate on ideas?</AccordionTrigger>
          <AccordionContent>
            Absolutely! The comment section allows for rich discussion and
            collaboration. Many members form teams to implement larger projects.
            You can also browse ideas marked &quot;Seeking Collaborators.&quot;
          </AccordionContent>
        </AccordionItem>

        {/* How are comments moderated? */}
        <AccordionItem value="item-10">
          <AccordionTrigger className="md:text-xl">How are comments moderated?</AccordionTrigger>
          <AccordionContent>
            We encourage constructive discussion but remove spam, hate speech,
            or misinformation. Members can report inappropriate comments, and
            our admins review flagged content regularly. Repeat offenders may
            face account restrictions.
          </AccordionContent>
        </AccordionItem>

        {/* What if my idea gets rejected? */}
        <AccordionItem value="item-11">
          <AccordionTrigger className="md:text-xl">What if my idea gets rejected?</AccordionTrigger>
          <AccordionContent>
            Don&apos;t worry! Our admins provide specific feedback on why an
            idea was rejected and suggestions for improvement. You can revise
            and resubmit your idea up to two more times. Common reasons include
            needing more detail or feasibility analysis.
          </AccordionContent>
        </AccordionItem>

        {/* How can I track an idea's implementation? */}
        <AccordionItem value="item-12">
          <AccordionTrigger className="md:text-xl">
            How can I track an idea&apos;s implementation?
          </AccordionTrigger>
          <AccordionContent>
            Many ideas include follow-up posts showing real-world
            implementation. You can also use the discussion threads to ask for
            updates or share your own experiences trying the idea. Our
            &quot;Success Stories&quot; section highlights particularly
            impactful implementations.
          </AccordionContent>
        </AccordionItem>

        {/* Are there rewards for top contributors? */}
        <AccordionItem value="item-13">
          <AccordionTrigger className="md:text-xl">
            Are there rewards for top contributors?
          </AccordionTrigger>
          <AccordionContent>
            Yes! Our monthly &quot;Green Innovator&quot; program recognizes
            members whose ideas receive the most engagement and positive impact
            reports. Winners receive premium features, promotional
            opportunities, and sometimes cash prizes from our sustainability
            partners.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqPage;
