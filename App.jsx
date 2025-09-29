import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Mail, MapPin, Phone, ExternalLink, BookOpen, Award, Users, Code, GraduationCap, FileText } from 'lucide-react'
import professionalPortrait from './assets/professional-portrait.jpg'
import researchIllustration from './assets/research-illustration.jpg'
import marketResearch from './assets/market-research.jpg'
import dataVisualization from './assets/data-visualization.jpg'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const publications = [
    {
      title: "An Approach to Brand Planning Under High Competitor Set Variation",
      authors: "Dass, Mayukh, Piyush Kumar, and Acharya, Manaswini",
      journal: "Journal of Business Research",
      year: "2024",
      volume: "182, 114798",
      type: "published"
    },
    {
      title: "An Investigation into Slogan Design and Brand Alignment",
      authors: "Dass, Mayukh, Chiranjeev Kohli, and Acharya, Manaswini",
      journal: "Journal of Advertising Research",
      year: "2023",
      volume: "(1), 43–60",
      type: "published"
    },
    {
      title: "The Paradox of Product Salience",
      authors: "Acharya, Manaswini, Aparna Labroo, and Mayukh Dass",
      journal: "Journal of Consumer Research",
      year: "Under Review",
      note: "Job Market Paper",
      type: "under-review"
    },
    {
      title: "Fractured Identities: Consumer Vulnerability and the Market's Role",
      authors: "Acharya, Manaswini, Debra L. Laverie, and Popovich Deidre",
      journal: "Journal of the Academy of Marketing Science",
      year: "Under Review",
      type: "under-review"
    }
  ]

  const workingPapers = [
    {
      title: "Developing an Integrated Model: Better Skills and Better Care",
      authors: "Chandy, Rajesh, Acharya, Manaswini, Mehta, Gaurav, and Narasimhan, Om",
      status: "Data collection",
      funding: "Gates Foundation",
      target: "Marketing Science"
    },
    {
      title: "Double Stigma: Role in AI Innovation Diffusion & Technology Adoption among Older Adults",
      authors: "Acharya, Manaswini, Dass, Mayukh, and Labroo, Aparna",
      status: "Finalizing Data Analysis",
      target: "Journal of Marketing Research"
    }
  ]

  const awards = [
    "Best in Track Paper, Summer AMA, Leveraging Data for B2B Marketing Innovation (2025)",
    "CBSIG, AMA Award for Best Research Proposal ($1,500) (2025)",
    "Outstanding Contribution to Research, Rawls College of Business ($1,000) (2025)",
    "Winner, Conceptual Articles of the AMS Review-Sheth Foundation (DoCCA) (2024)",
    "Fellow, ISBM, Smeal College of Business, PA (2024)",
    "Rawls Teaching Award, Texas Tech University (2024)",
    "NSF Proposal Writing Grant ($15,000) (2024)"
  ]

  const skills = [
    "R", "Python", "MATLAB", "Stata", "SPSS", "Excel (advanced)", 
    "G*Power", "PROCESS Macro", "PsyToolkit", "PFNA", "NVivo", 
    "Tableau", "fMRI analysis (SPM, nilearn)", "Sentiment & Topic Modeling"
  ]

  const navItems = [
    { id: 'home', label: 'Home', icon: Users },
    { id: 'research', label: 'Research', icon: BookOpen },
    { id: 'teaching', label: 'Teaching', icon: GraduationCap },
    { id: 'awards', label: 'Awards & Service', icon: Award },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail }
  ]

  const renderHome = () => (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-12"
    >
      <motion.div variants={fadeInUp} className="text-center space-y-6">
        <div className="relative inline-block">
          <motion.img
            src={professionalPortrait}
            alt="Manaswini Acharya"
            className="w-48 h-48 rounded-full object-cover mx-auto shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-200/20 to-purple-200/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </div>
        <div>
          <motion.h1 
            className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Manaswini Acharya
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground mt-2"
            variants={fadeInUp}
          >
            Ph.D. Candidate in Marketing
          </motion.p>
          <motion.p 
            className="text-lg text-muted-foreground"
            variants={fadeInUp}
          >
            Texas Tech University, Rawls College of Business
          </motion.p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50/50 to-purple-50/50">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-center">
              I am a Ph.D. candidate in Marketing at Texas Tech University's Rawls College of Business, 
              specializing in customer-based strategy, information processing, and marketing strategy with 
              a focus on emerging markets and AI. My research explores the intersection of branding, 
              marketing strategy, and technology, particularly examining how stigma affects consumer behavior 
              and product adoption in various contexts.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle className="text-blue-600">Theoretical Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground text-center">
              Customer-Based Strategy • Information Processing • Marketing Strategy • Emerging Markets • AI
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <CardTitle className="text-purple-600">Substantive Research</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground text-center">
              Better Marketing for a Better World • Stigmatized Contexts • Responsible Marketing
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Code className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-green-600">Methodological Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground text-center">
              Experimental Methods • Econometrics • Field Experiments • Machine Learning • fMRI/Neuroimaging
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )

  const renderResearch = () => (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      <motion.div variants={fadeInUp} className="text-center">
        <h2 className="text-4xl font-bold mb-4">Research Portfolio</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          My research focuses on understanding consumer behavior in stigmatized contexts and developing 
          marketing strategies that create positive social impact while driving business outcomes.
        </p>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <FileText className="w-6 h-6 text-blue-600" />
              Dissertation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">Breaking the Barriers: Stigma</h3>
            <h4 className="text-lg text-muted-foreground mb-4">
              The Paradox of Product Salience: When Advertising Backfires and Amplifies Stigma
            </h4>
            <p className="text-sm leading-relaxed">
              With over 50 million Americans experiencing stigmatizing health conditions such as menopause 
              and low testosterone, the role of advertising in boosting product awareness and adoption has 
              never been more critical. While advertising typically increases awareness and sales, for 
              products addressing stigmatized health conditions, it may instead backfire...
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <img src={researchIllustration} alt="Research" className="w-8 h-8 rounded" />
          Published Research
        </h3>
        <div className="space-y-4">
          {publications.filter(p => p.type === 'published').map((pub, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">{pub.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{pub.journal}</Badge>
                    <Badge variant="outline">{pub.year}</Badge>
                    <span className="text-sm text-muted-foreground">{pub.volume}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <img src={marketResearch} alt="Under Review" className="w-8 h-8 rounded" />
          Manuscripts Under Review
        </h3>
        <div className="space-y-4">
          {publications.filter(p => p.type === 'under-review').map((pub, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">{pub.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{pub.journal}</Badge>
                    <Badge variant="outline">{pub.year}</Badge>
                    {pub.note && <Badge variant="default">{pub.note}</Badge>}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <img src={dataVisualization} alt="Working Papers" className="w-8 h-8 rounded" />
          Working Papers
        </h3>
        <div className="space-y-4">
          {workingPapers.map((paper, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">{paper.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{paper.authors}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline">Status: {paper.status}</Badge>
                    <Badge variant="secondary">Target: {paper.target}</Badge>
                    {paper.funding && <Badge variant="default">Funded by {paper.funding}</Badge>}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )

  const renderTeaching = () => (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      <motion.div variants={fadeInUp} className="text-center">
        <h2 className="text-4xl font-bold mb-4">Teaching Experience</h2>
        <p className="text-lg text-muted-foreground">
          Passionate about education and mentoring the next generation of marketers
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Integrated Marketing Communications</CardTitle>
            <CardDescription>Instructor • Texas Tech University</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Fall 2022, Spring 2023, Summer 2024, Summer 2025
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Course Evaluations</Badge>
              <span className="text-sm">4.5/5, 4.5/5, 4.7/5</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Digital Marketing</CardTitle>
            <CardDescription>Instructor • Texas Tech University</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Spring 2025, Fall 2025
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Course Evaluation</Badge>
              <span className="text-sm">4.5/5</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <h3 className="text-2xl font-semibold mb-4">Teaching Assistant Roles</h3>
        <div className="space-y-3">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold">Market Forecasting & Analytics</h4>
              <p className="text-sm text-muted-foreground">Teaching Assistant, Prof. Mayukh Dass</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold">AI Strategies for Business</h4>
              <p className="text-sm text-muted-foreground">Teaching Assistant, Prof. Mayukh Dass</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  )

  const renderAwards = () => (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      <motion.div variants={fadeInUp} className="text-center">
        <h2 className="text-4xl font-bold mb-4">Awards & Service</h2>
        <p className="text-lg text-muted-foreground">
          Recognition for research excellence and service to the academic community
        </p>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <h3 className="text-2xl font-semibold mb-6">Recent Honors & Awards</h3>
        <div className="space-y-3">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="hover:shadow-md transition-all duration-300">
                <CardContent className="p-4">
                  <p className="text-sm">{award}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <h3 className="text-2xl font-semibold mb-6">Service to the Profession</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Editorial Service</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• Ad Hoc Reviewer, International Journal of Research in Marketing (2023–2024)</li>
                <li>• Ad Hoc Reviewer, Journal of Electronic Commerce Research (2022–2024)</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Conference Service</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1">
                <li>• AMA Public Policy Conference, Reviewer (2024–2025)</li>
                <li>• AMA Reviewer (2021–2025)</li>
                <li>• AMS Conference Reviewer (2025)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <h3 className="text-2xl font-semibold mb-6">Professional Affiliations</h3>
        <div className="flex flex-wrap gap-2">
          {["INFORMS (Marketing Science)", "American Marketing Association", "Transformative Consumer Research", "Academy of Marketing Science"].map((affiliation, index) => (
            <Badge key={index} variant="outline" className="text-sm">
              {affiliation}
            </Badge>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )

  const renderSkills = () => (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      <motion.div variants={fadeInUp} className="text-center">
        <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
        <p className="text-lg text-muted-foreground">
          Proficient in advanced analytical and programming tools for marketing research
        </p>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Card>
          <CardHeader>
            <CardTitle>Programming & Analysis Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Badge variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )

  const renderContact = () => (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      <motion.div variants={fadeInUp} className="text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Information</h2>
        <p className="text-lg text-muted-foreground">
          Let's connect and discuss research opportunities
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:Macharya@ttu.edu" className="text-blue-600 hover:underline">
                    Macharya@ttu.edu
                  </a>
                </div>
              </div>

              <Separator />

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">Office</p>
                  <p className="text-muted-foreground">Room E379, Rawls College of Business</p>
                  <p className="text-muted-foreground">Texas Tech University, Lubbock, TX</p>
                </div>
              </div>

              <Separator />

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-muted-foreground">806.742.3188</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'home': return renderHome()
      case 'research': return renderResearch()
      case 'teaching': return renderTeaching()
      case 'awards': return renderAwards()
      case 'skills': return renderSkills()
      case 'contact': return renderContact()
      default: return renderHome()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30">
      {/* Navigation */}
      <motion.nav 
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Manaswini Acharya
            </motion.h1>
            
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      activeSection === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </motion.button>
                )
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="outline" size="sm">Menu</Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <motion.footer 
        className="bg-gray-50 border-t border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Manaswini Acharya. All rights reserved.</p>
            <p className="mt-2">Ph.D. Candidate in Marketing, Texas Tech University</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
